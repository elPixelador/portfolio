import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ContentCard from "./ContentCard";
import "typeface-quicksand";
import { employers } from "./PortfolioContent";
import IconList from "./IconList";

const useAppStyles = makeStyles((theme) => {
    return {
        page: {
            margin: theme.spacing(1, "auto"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: "50%",
            },
        },
        header: {
            marginBottom: theme.spacing(1),
        },
        profilePicture: {
            width: 150,
            height: 150,
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            borderRadius: 100,
        },
        footer: {
            margin: theme.spacing(1),
        },
    };
});

const App: React.FunctionComponent = () => {
    const classes = useAppStyles();
    return (
        <>
            <div className={classes.page}>
                <Grid container className={classes.header} justify="center">
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
                            I am a software developer based in Melbourne,
                            Australia. I currently work at #Spiff, an exciting
                            tech startup in Docklands. We're working on a cloud
                            based product personalization platform.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={1}>
                    <Grid item xs={12} md={6}>
                        <ContentCard title="Employment History">
                            <IconList elements={employers} />
                        </ContentCard>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContentCard title="Personal Projects" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContentCard title="Open Source Contributions" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContentCard title="Social Media" />
                    </Grid>
                </Grid>
            </div>
            <Divider />
            <footer className={classes.footer}>
                <Typography variant="caption">
                    &copy; Copyright 2021, Liam Parker
                </Typography>
            </footer>
        </>
    );
};

export default App;
