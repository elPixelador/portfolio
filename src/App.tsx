import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ContentSection from "./ContentCard";
import "typeface-quicksand";
import {
    contributions,
    employers,
    mediaLinks,
    projects,
} from "./PortfolioContent";
import ElementList from "./ElementList";

const useAppStyles = makeStyles((theme) => {
    return {
        content: {
            margin: theme.spacing(0, "auto"),
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
            <Grid
                container
                spacing={1}
                className={classes.content}
                justify="center"
            >
                <Grid item xs={12} md={6}>
                    <ContentSection title="Employment History">
                        <ElementList elements={employers} />
                    </ContentSection>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContentSection title="Personal Projects">
                        <ElementList elements={projects} />
                    </ContentSection>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContentSection title="Open Source">
                        <ElementList elements={contributions} />
                    </ContentSection>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContentSection title="Social Media">
                        <ElementList elements={mediaLinks} />
                    </ContentSection>
                </Grid>
            </Grid>
            <Divider />
            <footer>
                <Grid container spacing={1} className={classes.content}>
                    <Grid item xs={12}>
                        <Typography variant="caption">
                            &copy; Copyright 2015 - {new Date().getFullYear()},
                            Liam Parker
                        </Typography>
                    </Grid>
                </Grid>
            </footer>
        </>
    );
};

export default App;
