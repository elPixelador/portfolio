import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    withStyles,
} from "@material-ui/core";
import * as React from "react";
import { ElementDetails } from "./PortfolioContent";

const useElementListStyles = makeStyles(() => {
    return {
        listItem: {
            borderRadius: 5,
        },
    };
});

const ContainedAvatar = withStyles({
    img: {
        objectFit: "contain",
    },
})(Avatar);

const ElementList: React.FunctionComponent<{ elements: ElementDetails[] }> = (
    props
) => {
    const { elements } = props;
    const classes = useElementListStyles();
    const elementComponents = elements.map((el) => (
        <ListItem
            className={classes.listItem}
            key={el.src}
            button
            onClick={() => window.open(el.href)}
        >
            <ListItemAvatar>
                <ContainedAvatar
                    variant="square"
                    alt={el.primary}
                    src={el.src}
                />
            </ListItemAvatar>
            <ListItemText primary={el.primary} secondary={el.secondary} />
        </ListItem>
    ));
    return <List>{elementComponents}</List>;
};

export default ElementList;
