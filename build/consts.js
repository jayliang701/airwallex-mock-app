/** 
 * Define consts (such as general path variable) here
 */
const path = require('path');

const root = path.resolve(process.cwd());

const src = path.resolve(root, 'src');

const res = path.resolve(root, 'static');

const dist = path.resolve(root, 'dist');

module.exports = {
    root,
    src,
    dist,
    res,
};
