const styles = theme => ({
  root: {
    display: 'flex',
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
  },
  toolbar: {
    paddingRight: 24, 
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(1) * 3,
    height: '100vh',
    overflow: 'auto',
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
  },
  h5: {
    marginBottom: theme.spacing(1) * 2,
  },
});

export default styles;
