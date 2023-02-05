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
    })) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(
        ({
            args: [index],
            active,
            movement: [mx],
            direction: [xDir],
            velocity: [vx],
        }) => {
            const trigger = vx > 0.2 // If you flick hard enough it should trigger the card to fly out
            if (!active && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
            api.start((i) => {
                if (index !== i) return // We're only interested in changing spring-data for the current spring
                const isGone = gone.has(index)
                const x = isGone
                    ? (200 + window.innerWidth) * xDir
                    : active
                    ? mx
                    : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
                const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0) // How much the card tilts, flicking it harder makes it rotate faster
                const scale = active ? 1.1 : 1 // Active cards lift up a bit
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
                height: '40vh',
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
                                height: '30%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                style={{ maxWidth: '70%' }}
                                src={elements[i]?.src}
                                alt=""
                                draggable={false}
                            />
                        </div>
                        <div
                            style={{
                                height: '70%',
                                padding: 20,
                                textAlign: 'center',
                            }}
                        >
                            <h2>{elements[i]?.primary}</h2>
                            <p>{elements[i]?.secondary}</p>
                        </div>
                    </animated.div>
                </animated.div>
            ))}
        </div>
    )
}

export default ElementList
