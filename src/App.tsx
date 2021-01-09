import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ContentCard from "./ContentCard";
import "typeface-quicksand";
import {
    contributions,
    employers,
    mediaLinks,
    projects,
} from "./PortfolioContent";
import IconList from "./IconList";

const useAppStyles = makeStyles((theme) => {
    return {
        content: {
            margin: theme.spacing(1, "auto"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: "50%",
            },
        },
        profilePicture: {
            width: 150,
            height: 150,
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            borderRadius: 100,
        },
    };
});

const App: React.FunctionComponent = () => {
    const classes = useAppStyles();
    return (
        <>
            <Grid container className={classes.content} justify="center">
                <Grid item xs={12}>
                    <img
                        className={classes.profilePicture}
                        src="https://avatars3.githubusercontent.com/u/7558040?s=460&v=4"
                        alt="a portrait of liam"
                    />
                    <Typography align="center" variant="h2">
                        Liam Parker
                    </Typography>
                    <Typography align="center">
                        I am a software developer based in Melbourne, Australia.
                        I currently work at #Spiff, an exciting tech startup in
                        Docklands. We're working on a cloud based product
                        personalization platform.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className={classes.content} justify="center">
                <Grid item xs={12} md={6}>
                    <ContentCard title="Employment History">
                        <IconList elements={employers} />
                    </ContentCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContentCard title="Personal Projects">
                        <IconList elements={projects} />
                    </ContentCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContentCard title="Open Source Contributions">
                        <IconList elements={contributions} />
                    </ContentCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContentCard title="Social Media">
                        <IconList elements={mediaLinks} />
                    </ContentCard>
                </Grid>
            </Grid>
            <Divider />
            <footer className={classes.content}>
                <Typography variant="caption">
                    &copy; Copyright 2015 - {new Date().getFullYear()}, Liam
                    Parker
                </Typography>
            </footer>
        </>
    );
};

export default App;
