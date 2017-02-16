import mongoose from 'mongoose';
import request from 'request';
import championmodel from './db/controllers/champion.js';

mongoose.connect('mongodb://localhost/d3lol');

