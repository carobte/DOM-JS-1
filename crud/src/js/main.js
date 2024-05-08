// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// Import our data from Bootstrap
import { coders } from '../../public/data/database.js'

import { withForEach } from './operations.js'

const tbody = document.querySelector('tbody')

withForEach(coders, tbody)
