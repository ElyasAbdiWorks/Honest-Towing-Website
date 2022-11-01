const path = require('path')
const withSass = require('@zeit/next-sass');
module.exports = withSass({
/* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass
*/
cssModules: true
})

module.exports = {
    env: {
        GOOGLE_MAPS_API_KEY: 'AIzaSyCyqDtKmNTSVnL4YiZPwyFuq9rXf26II00',
        EMAILJS_API_KEY:'user_3AOqQGNFD3ge5UZwAUY1n'
    },
    /* Add Your Scss File Folder Path Here */
    sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    },
}

