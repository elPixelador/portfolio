import { Grid, makeStyles, Typography } from "@material-ui/core";
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
    const border = "solid 1px rgba(54, 54, 54, 0.2)";
    return {
        content: {
            margin: theme.spacing(0, "auto"),
            padding: theme.spacing(0, 2),
            maxWidth: 850,
            width: "100%",
            borderLeft: border,
            borderRight: border,
            [theme.breakpoints.up("md")]: {
                width: "70%",
            },
            [theme.breakpoints.up("lg")]: {
                width: "60%",
            },
            [theme.breakpoints.up("xl")]: {
                width: "35%",
            },
            backgroundColor: "#fcfcfc",
            "&:first-of-type": {
                marginTop: theme.spacing(2),
                paddingTop: theme.spacing(2),
                borderRadius: "5px 5px 0px 0px",
                borderTop: border,
            },
            "&:last-of-type": {
                paddingBottom: theme.spacing(2),
                borderRadius: "0px 0px 5px 5px",
                borderBottom: border,
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
        description: {
            margin: theme.spacing(1, 0),
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
                        src="https://avatars3.githubusercontent.com/u/7558040"
                        alt="a portrait of liam"
                    />
                    <Typography align="center" variant="h2">
                        Liam Parker
                    </Typography>
                    <Typography align="center" className={classes.description}>
                        I am a <b>software developer</b> based in Melbourne,
                        Australia. I currently work at <b>Spiff</b>, an exciting
                        tech startup in Docklands. We're working on a cloud
                        based product personalization platform.
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
                <footer>
                    <Typography variant="caption">
                        &copy; Copyright 2015 - {new Date().getFullYear()}, Liam
                        Parker
                    </Typography>
                </footer>
            </Grid>
        </>
    );
};

export default App;
