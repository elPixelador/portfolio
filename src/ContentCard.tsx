import * as React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useContentCardStyles = makeStyles((theme) => {
    return {
        title: {
            padding: theme.spacing(1),
            border: "solid 1px lightgray",
            borderRadius: 5,
        },
    };
});

const ContentSection: React.FunctionComponent<{
    title: string;
}> = (props) => {
    const { children, title } = props;
    const classes = useContentCardStyles();
    return (
        <div>
            <Typography className={classes.title} variant="h5" align="center">
                {title}
            </Typography>
            {children}
        </div>
    );
};

export default ContentSection;
