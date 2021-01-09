import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { ElementDetails } from "./PortfolioContent";

const useIconListStyles = makeStyles((theme) => {
    return {
        icon: {
            margin: theme.spacing(1),
            width: 100,
        },
    };
});

const IconList: React.FunctionComponent<{ elements: ElementDetails[] }> = (
    props
) => {
    const { elements } = props;
    const classes = useIconListStyles();
    const elementComponents = elements.map((el) => (
        <a href={el.href} target="_blank" rel="noreferrer">
            <img className={classes.icon} src={el.src} alt={el.name} />
        </a>
    ));
    return <>{elementComponents}</>;
};

export default IconList;
