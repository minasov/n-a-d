const ShareUrl = function(url,  requiredParams = {
    utm_source: 'publicis_sapient',
    utm_campaign: '2021',
    utm_medium: 'Social'
}) {
    try {
        let urlObj = new URL(url);
        let hashParams = new URLSearchParams(urlObj.hash.slice(1));
        for (const [key, value] of Object.entries(requiredParams)) {
            if(!(urlObj.searchParams.has(key) || hashParams.has(key))){
                urlObj.searchParams.set(key, value);
            }
        }
        return urlObj.href;

    } catch (e) {
        return 'Invalid URL';
    }
}

module.exports = ShareUrl;
export default ShareUrl;