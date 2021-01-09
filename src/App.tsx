import {
    createMuiTheme,
    Grid,
    makeStyles,
    ThemeProvider,
    Typography,
} from "@material-ui/core";
import React from "react";
import ContentCard from "./ContentCard";
import "typeface-quicksand";

const theme = createMuiTheme({
    spacing: 8 * 5,
    typography: {
        fontFamily: "Quicksand",
    },
});

const useAppStyles = makeStyles((theme) => {
    return {
        page: {
            margin: theme.spacing(5),
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
        <ThemeProvider theme={theme}>
            <div className={classes.page}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} md={6}>
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
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item xs={6}>
                        <ContentCard title="Employment History" />
                    </Grid>
                    <Grid item xs={6}>
                        <ContentCard title="Personal Projects" />
                    </Grid>
                    <Grid item xs={6}>
                        <ContentCard title="Open Source Contributions" />
                    </Grid>
                    <Grid item xs={6}>
                        <ContentCard title="Social Media" />
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
};

export default App;
