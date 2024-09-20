import React from 'react'
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './Patient.css' ;



export const Patient = () => {
   
  return (
  <>
  

<nav class="menu">
   <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
   <label class="menu-open-button" for="menu-open">
    <span class="lines line-1"></span>
    <span class="lines line-2"></span>
    <span class="lines line-3"></span>
  </label>

   <a href="#" class="menu-item blue"> <i class="fa fa-anchor"></i>ewdwfewfewffewfe  </a>
   <a href="#" class="menu-item green"> <i class="fa fa-coffee"></i> effrfrffrfe</a>
   <a href="#" class="menu-item red"> <i class="fa fa-heart"></i>frefreefe </a>
   <a href="#" class="menu-item purple"> <i class="fa fa-microphone"></i>refrfref </a>
   <a href="#" class="menu-item orange"> <i class="fa fa-star"></i> ferfrefrefr</a>
   <a href="#" class="menu-item lightblue"> <i class="fa fa-diamond"></i> ferfreffre</a>
</nav>


   
  </> 
   )
}
export default Patient
