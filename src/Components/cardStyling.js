import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

const CardStyling = (props) => {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <Card className="border border-light p-3 w-75 bg-secondary ">
        <h1 className="text-light text-uppercase">Nasa photo of the day</h1>
        <CardImg
          top
          width="100%"
          className="rounded-lg mb-3 shadow-sm"
          src={props.data.url}
          alt="Card image cap"
        />
        <AppBar className="bg-dark" position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Photo Name" {...a11yProps(0)} />
            <Tab label="Author Name" {...a11yProps(1)} />
            <Tab label="Date of Photo" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <h1 className="text-light text-uppercase">{props.data.title}</h1>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h1 className="text-light mb-2">{props.data.copyright}</h1>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h1 className="text-light mb-2">{props.data.date}</h1>
        </TabPanel>
        <CardBody className="p-0">
          <p className="text-light mb-0">{props.data.explanation}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardStyling;
