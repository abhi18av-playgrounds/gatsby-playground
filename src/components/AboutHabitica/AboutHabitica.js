import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export function FullWidthGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

const AboutHabitica = () => (
  <section className="content about-habitica">
    <h1>O que é o Habitica ?</h1>
    <p className="about-habitica__text">
      Habitica é uma aplicação gamificada para ajudar seus usuários a criar ou
      melhorar hábitos na vida real. O app contém prêmios e punições para
      motivar o usuário e uma rede social para inspirá-lo.
    </p>
    <FullWidthGrid />
  </section>
)

export default AboutHabitica
