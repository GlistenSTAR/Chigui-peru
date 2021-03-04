import React, {useState} from 'react';
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
    fontSize: theme.typography.pxToRem(1),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Accordian = ({ title,  data, onclick, visible, shownName}) =>{
		const classes = useStyles();
		let content;

		const [subtitle, setSubtitle] = useState("");
		// const [display, setDisplay] = useState('true');

		const liClick = (e) => {
			setSubtitle(e.target.getAttribute('data'));
			onclick(e);
			// setDisplay(false);
		}

		// const headClick = (e) => {
		// 	console.log("adsf");
		// 	setDisplay(true);
		// }
		
		if(visible){
			content = data.map((value, key)=>{
					// if(display){
						return (
							<li className="list-group-item" key={data[key][shownName]+"_"+key} name={data[key][shownName]} data={data[key][shownName]} onClick={liClick}>
								{data[key].mark?(<img src={data[key].mark} align="left" className="mark_sign" alt="mark"/>):''}
									{data[key][shownName]}
								<i className="fa fa-angle-right"  align="right"/>
							</li>
						);
					// }
			});
		}
		return (
			<div className={classes.root}>
				<div className="container">
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography className={classes.heading} >{title} <span className="mt-5 pt-5">{subtitle}</span></Typography>
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
  shownName: PropTypes.string,
	data: PropTypes.array,
};

export default Accordian;

