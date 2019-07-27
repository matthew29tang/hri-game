import { robot_actions } from './robot_actions.js';

const rewards1 = [1.0, 3.0, 2.5, 2.0]
const rewards2 = [8.0, 10.0, 7.5, 6.0]
const rewards3 = [10.0, 10.0, 25.0, 7.0]
const rewards4 = [3.0, 4.0, 5.0, 2.0]
const rewards5 = [6.0, 5.0, 20.0, 5.0]
const rewards = [rewards1, rewards2, rewards3, rewards4, rewards5]

const success1 = [1, 1, 0, 1]
const success2 = [0, 1, 1, 1]
const success3 = [1, 1, 0, 1]
const success4 = [1, 0, 0, 1]
const success5 = [1, 1, 0, 1]
const successes = [success1, success2, success3, success4, success5]

const videos = [
  ['https://youtu.be/RjfDo9C7cJA', 'https://youtu.be/U4VZreSaoD8', 'https://youtu.be/3QSoHLZi-04', 'https://youtu.be/eCYaAl4A1do'],
  ['https://youtu.be/8OBqKwvxnzY', 'https://youtu.be/Uwa3r2y0KgM', 'https://youtu.be/GKLkLg97Z-Y', 'https://youtu.be/aOqkfVtcXQM'],
  ['https://youtu.be/Juxa8MCmvgQ', 'https://youtu.be/IzBOND7CLAg', 'https://youtu.be/4p3GfvcxcdI', 'https://youtu.be/NPy7UapjrRA'], 
  ['https://youtu.be/maKp6yKWTco', 'https://youtu.be/Pb5fyH8X5pg', 'https://youtu.be/Au9sYSGhEo8', 'https://youtu.be/0KMx_1-FU-s'], 
  ['https://youtu.be/C_weHBYxLcI', 'https://youtu.be/XR0AOv7AF6g', 'https://youtu.be/ySKCKU5NQ8U', 'https://youtu.be/Iu7rha1YL5M']]

const rooms = {
    0: 'Room A',
    1: 'Room B',
    2: 'Room C',
    3: 'Room D',
  }

export {rewards, successes, videos, rooms, robot_actions};