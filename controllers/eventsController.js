const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const { Event } = require('./../models/eventsModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('./../utils/email');
const { Op } = require('sequelize');
