import { Grid, makeStyles } from "@material-ui/core";
import * as React from "react";
import { ElementDetails } from "./PortfolioContent";

const useIconListStyles = makeStyles((theme) => {
    return {
        icon: {
            width: "100%",
        },
    };
});

const IconList: React.FunctionComponent<{ elements: ElementDetails[] }> = (
    props
) => {
    const { elements } = props;
    const classes = useIconListStyles();
    const elementComponents = elements.map((el) => (
        <Grid item xs={4}>
            <a href={el.href} target="_blank" rel="noreferrer">
                <img className={classes.icon} src={el.src} alt={el.name} />
            </a>
        </Grid>
    ));
    return (
        <Grid
            container
            spacing={1}
            alignContent="center"
            alignItems="center"
            justify="center"
        >
            {elementComponents}
        </Grid>
    );
};

export default IconList;
