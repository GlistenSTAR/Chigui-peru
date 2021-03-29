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

const Accordian = ({ 
		title,  
		data, 
		onclick, 
		shownName
	}) =>{
			const classes = useStyles();
			let content;

			const [subtitle, setSubtitle] = useState("");
			const [expand, setExpand] = useState(true);

			const liClick = (e) => {
				setSubtitle(e.target.getAttribute('data'));
				onclick(e);
				setExpand(!expand);
			}
			const clickExpand = (e) =>{
				setExpand(!expand);
			}
					
			content = data.map((value, key)=>{
				return (
					<li 
						className="list-group-item" 
						key={data[key][shownName]+"_"+key} 
						name={data[key][shownName]} 
						data={data[key][shownName]} 
						onClick={liClick}
					>
						{data[key].mark?(<img src={data[key].mark} align="left" className="mark_sign" alt="mark"/>):''}
							{data[key][shownName]}
						<i className="fa fa-angle-right"  align="right"/>
					</li>
				);
			});

			return (
				<div className={classes.root}>
					<div className="container">
						<Accordion 
							defaultExpanded={true} 
							expanded={expand} 
							style={{ 
								borderBottom:'1px', 
								borderBottomColor:'white', 
								borderBottomStyle:'solid'
							}}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography 
									className={classes.heading} 
									style={{fontSize:'14px', textAlign:'left'}}
									onClick={clickExpand}
								>
									<span className="Name" style={{ float:'left'}}>{title}{' '}</span>
									<span style={{fontSize:'18px', color:'#007bff',width:'100%',top:'10px',left:'0', textAlign:'center', position:'absolute'}}>{' '}{subtitle}</span>
								</Typography>
							</AccordionSummary>

							<AccordionDetails>
								<Typography>
									<span 
										className="list-group list-group-flush" 
										align="center"
									>
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
  shownName: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
	onclick: PropTypes.func.isRequired
};

export default Accordian;