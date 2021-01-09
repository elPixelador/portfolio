import * as React from "react";
import { Divider, makeStyles, Paper, Typography } from "@material-ui/core";

const useContentCardStyles = makeStyles((theme) => {
    return {
        title: {
            padding: theme.spacing(1),
        },
    };
});

const ContentCard: React.FunctionComponent<{
    title: string;
}> = (props) => {
    const { children, title } = props;
    const classes = useContentCardStyles();
    return (
        <Paper>
            <Typography className={classes.title} variant="h5">
                {title}
            </Typography>
            <Divider />
            {children}
        </Paper>
    );
};

export default ContentCard;
