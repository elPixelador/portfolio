import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { ElementDetails } from './PortfolioContent'

import styles from './styles.module.css'

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
        r / 10
    }deg) rotateZ(${r}deg) scale(${s})`

const ElementList: React.FunctionComponent<{ elements: ElementDetails[] }> = ({
    elements,
}) => {
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, api] = useSprings(elements.length, (i) => ({
        ...to(i),
        from: from(i),
    }))

    const isMobile = window.innerWidth < 600
    const cardHeight = isMobile ? '50vh' : '40vh'

    const bind = useDrag(
        ({
            args: [index],
            active,
            movement: [mx],
            direction: [xDir],
            velocity: [vx],
        }) => {
            const trigger = vx > 0.2
            if (!active && trigger) gone.add(index)
            api.start((i) => {
                if (index !== i) return
                const isGone = gone.has(index)
                const x = isGone
                    ? (200 + window.innerWidth) * xDir
                    : active
                    ? mx
                    : 0
                const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0)
                const scale = active ? 1.1 : 1
                return {
                    x,
                    rot,
                    scale,
                    delay: undefined,
                    config: {
                        friction: 50,
                        tension: active ? 800 : isGone ? 200 : 500,
                    },
                }
            })
            if (!active && gone.size === elements.length)
                setTimeout(() => {
                    gone.clear()
                    api.start((i) => to(i))
                }, 600)
        }
    )

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: `url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 20 20, auto`,
                width: '100%',
                height: cardHeight,
            }}
        >
            {props.map(({ x, y, rot, scale }, i) => (
                <animated.div
                    className={styles.deck}
                    key={elements[i]?.primary}
                    style={{ x, y }}
                >
                    <animated.div
                        {...bind(i)}
                        style={{
                            transform: interpolate([rot, scale], trans),
                            display: 'flex',
                            flexDirection: 'column',
                            userSelect: 'none',
                        }}
                    >
                        <div
                            style={{
                                height: '40%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                style={{
                                    maxWidth: '80%',
                                    maxHeight: '80%',
                                }}
                                src={elements[i]?.src}
                                alt={elements[i]?.primary}
                                draggable={false}
                            />
                        </div>
                        <div
                            style={{
                                borderTop: '1px solid rgba(10, 10, 10, 0.2)',
                                height: '60%',
                                padding: 10,
                                textAlign: 'center',
                                overflowY: 'auto',
                            }}
                        >
                            <h3 style={{ margin: 0 }}>
                                {elements[i]?.primary}
                            </h3>
                            <h5 style={{ margin: 0, marginTop: 5 }}>
                                {elements[i]?.title}
                            </h5>
                            <h6 style={{ margin: 0, marginTop: 5 }}>
                                {elements[i]?.time}
                            </h6>
                            <p
                                style={{
                                    fontSize: '0.85em',
                                    margin: 0,
                                    marginTop: 5,
                                }}
                            >
                                {elements[i]?.secondary}
                            </p>
                        </div>
                    </animated.div>
                </animated.div>
            ))}
        </div>
    )
}

export default ElementList
