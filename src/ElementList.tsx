import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@material-ui/core";
import * as React from "react";
import { ElementDetails } from "./PortfolioContent";

const ElementList: React.FunctionComponent<{ elements: ElementDetails[] }> = (
    props
) => {
    const { elements } = props;
    const elementComponents = elements.map((el) => (
        <ListItem key={el.src} button>
            <ListItemAvatar>
                <Avatar
                    variant="square"
                    alt={el.name}
                    src={el.src}
                    style={{ objectFit: "contain" }}
                />
            </ListItemAvatar>
            <ListItemText primary={el.name} secondary="" />
        </ListItem>
    ));
    return <List>{elementComponents}</List>;
};

export default ElementList;
