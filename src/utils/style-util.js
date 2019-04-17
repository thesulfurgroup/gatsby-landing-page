import { rem as polishedRem } from 'polished'
import config from '../config'

/**
 * Converts Pixel to REM value based
 * on the current theme settings.
 * @param {string} pxValue 
 */
export const rem = pxValue => polishedRem(pxValue, config.currentTheme.root)