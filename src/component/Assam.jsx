import React, {useEffect} from "react";
import {fetchAssam} from "../app/action";
import {connect} from 'react-redux';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {Panel} from "./Panel";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress"

const mapStateToProps = state => ({loading: state.isLoadingIndia, assam: state.assam, summary: state.assamSummary})
const mapDispatchToProps = {fetchAssam}

const Assam = ({loading, assam = {}, fetchAssam, summary}) => {
    useEffect(() => {
        fetchAssam()
    }, [])

    if(loading === true) {
        return (
            <Grid
                container={true}
                spacing={10}
                direction="column"
                alignItems="center"
                justify="center"
                //minHeight 100vh is too low
                style={{ minHeight: '50vh'}}
            >
                <CircularProgress size={60}/>
            </Grid>
        )
    }
    return (
        <>
            <Grid container={true}>

                <Grid xs={4} item={true}>
                    <Panel icon={"accessible"} caption={"Confirmed case"} title={summary.confirmed} percent={summary.confirmed *100/35080827}/>

                </Grid>
                <Grid xs={4} item={true}>
                    <Panel icon={"healing"} caption={"Recovered"} title={summary.recovered} percent={summary.recovered *100/summary.confirmed}/>

                </Grid>
                <Grid xs={4} item={true}>
                    <Panel icon={"sentiment_very_dissatisfied"} caption={"Deceased"} title={summary.deaths} percent={summary.deaths *100/summary.confirmed}/>

                </Grid>
            </Grid>
            {Array.isArray(assam) && assam.map(state => (
                <ExpansionPanel key={state.district}>
                    <ExpansionPanelSummary

                        aria-controls="panel1c-content"
                        id="panel1c-header"
                    >
                        <Typography style={{flex: 0.75}}>{state.district}</Typography>

                        <div style={{flex: 0.1}}>
                            <Typography>Confirmed </Typography>
                            <Chip color={"primary"} label={state.confirmed}/>
                        </div>
                        <div style={{flex: 0.1}}>
                            <Typography>Recovered </Typography>
                            <Chip color={"primary"} label={state.recovered}/>
                        </div>
                        <div>
                            <Typography>Deceased </Typography>
                            <Chip color={"primary"} label={state.deaths}/>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>

                        <List style={{flex: 1}} title={"District wise"} subheader={"Places"}>

                        </List>


                    </ExpansionPanelDetails>
                    <Divider/>
                </ExpansionPanel>
            ))}
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Assam)
