import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const Accordian = ({ title, 	listdata, data, onClick }) =>{
		const classes = useStyles();
		let content;
		content = listdata.map((value, key)=>{
			let url = data[key].mark;
			return (
				<li className="list-group-item" key={key} onClick={onClick}>
					<img src={url} align="left" className="mark_sign"/>
					<span style={spanstyle}>{value}</span>
					{/* <i className="fa fa-caret-right" align="right"/> */}
				</li>
		)});
		return (
			<div className={classes.root}>
				<div className="container">
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography className={classes.heading}>{title}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<span className="list-group list-group-flush" align="center">
									{content}
								</span>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		);
}

Accordian.propTypes = {
  name: PropTypes.string,
  listdata: PropTypes.array,
	data: PropTypes.array,
	onClick:PropTypes.func.isRequired
};

const spanstyle = {
	paddingBottom:20
}

export default Accordian;

