import {
	_x,
} from '@wordpress/i18n';

const templates = {
	template_1: {
		label: _x( 'Full footer 1', 'label', 'gp-premium' ),
		thumbnail: 'site-footer-full-1.jpg',
		content: '<!-- wp:generateblocks/container {"uniqueId":"73cd57e1","paddingTop":"140","paddingRight":"30","paddingBottom":"60","paddingLeft":"30","backgroundColor":"#1b1b42","shapeDividers":[],"isDynamic":true} --> <!-- wp:generateblocks/grid {"uniqueId":"b76f312f","columns":3,"horizontalGap":80,"verticalAlignment":"center","verticalGapTablet":40,"isDynamic":true} --> <!-- wp:generateblocks/container {"uniqueId":"53cb46e2","isGrid":true,"gridId":"41f809a3","width":60,"widthTablet":100,"paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"aa19f1fb","element":"h3","textColor":"#ffffff"} --> <h3 class="gb-headline gb-headline-aa19f1fb gb-headline-text">Reach out to us for a consultation.</h3> <!-- /wp:generateblocks/headline --> <!-- wp:generateblocks/headline {"uniqueId":"41582601","element":"p","textColor":"#ffffff","paddingRight":"100","paddingRightTablet":"0"} --> <p class="gb-headline gb-headline-41582601 gb-headline-text">Semper blandit suspendisse faucibus metus lobortis morbi magna vivamus per risus fermentum dapibus imperdiet praesent magnis.</p> <!-- /wp:generateblocks/headline --> <!-- wp:generateblocks/button-container {"uniqueId":"a8276863","marginTop":"30","isDynamic":true} --> <!-- wp:generateblocks/button {"uniqueId":"529d5dda","hasUrl":true,"backgroundColor":"","textColor":"#ffffff","backgroundColorHover":"#6212b3","backgroundColorHoverOpacity":0,"textColorHover":"#f2f5fa","borderColor":"#ffffff","borderColorHover":"#f2f5fa","borderColorHoverOpacity":0.8,"fontWeight":"600","marginRight":"20","marginBottomMobile":"20","paddingTop":"10","paddingRight":"20","paddingBottom":"10","paddingLeft":"20","borderSizeTop":"3","borderSizeRight":"3","borderSizeBottom":"3","borderSizeLeft":"3","borderRadiusTopRight":"2","borderRadiusBottomRight":"2","borderRadiusBottomLeft":"2","borderRadiusTopLeft":"2"} --> <a class="gb-button gb-button-529d5dda gb-button-text" href="https://gpsites.co/search/contact/">Contact Us</a> <!-- /wp:generateblocks/button --> <!-- /wp:generateblocks/button-container --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/container {"uniqueId":"e1bd60bb","isGrid":true,"gridId":"41f809a3","width":20,"widthTablet":50,"paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","removeVerticalGapTablet":true,"isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"37420255","element":"p","textColor":"#ffffff"} --> <p class="gb-headline gb-headline-37420255 gb-headline-text">Company Name<br>Address Here<br>Address Here</p> <!-- /wp:generateblocks/headline --> <!-- wp:generateblocks/headline {"uniqueId":"bf8e162e","element":"p","textColor":"#ffffff","linkColor":"#ffffff","linkColorHover":"#f2f5fa","marginBottom":"0","hasIcon":true,"iconPaddingTop":".1"} --> <p class="gb-headline gb-headline-bf8e162e"><span class="gb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.3 59.3"><path d="M35 59.3H8.3C3.7 59.3 0 55.6 0 51V8.3C0 3.7 3.7 0 8.3 0H35c4.6 0 8.3 3.7 8.3 8.3V51c0 4.6-3.7 8.3-8.3 8.3zM8.3 6C7 6 6 7 6 8.3V51c0 1.3 1 2.3 2.3 2.3H35c1.3 0 2.3-1 2.3-2.3V8.3C37.3 7 36.3 6 35 6H8.3z"></path><path d="M21.7 48.7c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path></svg></span><span class="gb-headline-text">+1 000 000 0000</span></p> <!-- /wp:generateblocks/headline --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/container {"uniqueId":"c762d353","isGrid":true,"gridId":"41f809a3","width":20,"widthTablet":50,"paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","removeVerticalGapTablet":true,"removeVerticalGapMobile":true,"isDynamic":true} --> <!-- wp:generateblocks/button-container {"uniqueId":"08544617","alignment":"right","alignmentTablet":"right","alignmentMobile":"left","isDynamic":true} --> <!-- wp:generateblocks/button {"uniqueId":"13c371f8","hasUrl":true,"hasIcon":true,"removeText":true,"ariaLabel":"instagram link","backgroundColor":"","textColor":"#ffffff","backgroundColorHover":"#222222","textColorHover":"#f2f5fa","borderColor":"#ffffff","borderColorHover":"#f2f5fa","marginRight":"20","paddingTop":"6","paddingRight":"6","paddingBottom":"6","paddingLeft":"6","borderSizeTop":"2","borderSizeRight":"2","borderSizeBottom":"2","borderSizeLeft":"2","borderRadiusTopRight":"50","borderRadiusBottomRight":"50","borderRadiusBottomLeft":"50","borderRadiusTopLeft":"50","iconSize":0.8} --> <a class="gb-button gb-button-13c371f8" href="#" aria-label="instagram link"><span class="gb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="currentColor"></path></svg></span></a> <!-- /wp:generateblocks/button --> <!-- wp:generateblocks/button {"uniqueId":"926332bd","hasUrl":true,"hasIcon":true,"removeText":true,"ariaLabel":"twitter link","backgroundColor":"","textColor":"#ffffff","backgroundColorHover":"#222222","textColorHover":"#f2f5fa","borderColor":"#ffffff","borderColorHover":"#f2f5fa","marginRight":"20","paddingTop":"6","paddingRight":"6","paddingBottom":"6","paddingLeft":"6","borderSizeTop":"2","borderSizeRight":"2","borderSizeBottom":"2","borderSizeLeft":"2","borderRadiusTopRight":"50","borderRadiusBottomRight":"50","borderRadiusBottomLeft":"50","borderRadiusTopLeft":"50","iconSize":0.8} --> <a class="gb-button gb-button-926332bd" href="#" aria-label="twitter link"><span class="gb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" aria-hidden="true"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" fill="currentColor"></path></svg></span></a> <!-- /wp:generateblocks/button --> <!-- wp:generateblocks/button {"uniqueId":"d957854e","hasUrl":true,"hasIcon":true,"removeText":true,"ariaLabel":"facebook link","backgroundColor":"","textColor":"#ffffff","backgroundColorHover":"#222222","textColorHover":"#f2f5fa","borderColor":"#ffffff","borderColorHover":"#f2f5fa","paddingTop":"6","paddingRight":"6","paddingBottom":"6","paddingLeft":"6","borderSizeTop":"2","borderSizeRight":"2","borderSizeBottom":"2","borderSizeLeft":"2","borderRadiusTopRight":"50","borderRadiusBottomRight":"50","borderRadiusBottomLeft":"50","borderRadiusTopLeft":"50","iconSize":0.8} --> <a class="gb-button gb-button-d957854e" href="#" aria-label="facebook link"><span class="gb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em" aria-hidden="true"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" fill="currentColor"></path></svg></span></a> <!-- /wp:generateblocks/button --> <!-- /wp:generateblocks/button-container --> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/grid --> <!-- wp:generateblocks/container {"uniqueId":"0f87c806","paddingTop":"60","paddingRight":"0","paddingBottom":"60","paddingLeft":"0","marginTop":"60","borderSizeTop":"1","borderColor":"#ffffff","isDynamic":true} --> <!-- wp:generateblocks/grid {"uniqueId":"9cc30ed9","columns":2,"isDynamic":true} --> <!-- wp:generateblocks/container {"uniqueId":"e6861bde","isGrid":true,"gridId":"60ab45cf","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"97c10964","element":"p","textColor":"#ffffff","showAdvancedTypography":true,"fontSize":17} --> <p class="gb-headline gb-headline-97c10964 gb-headline-text">© Company Name</p> <!-- /wp:generateblocks/headline --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/container {"uniqueId":"7c528044","isGrid":true,"gridId":"60ab45cf","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","isDynamic":true} --> <!-- wp:generateblocks/button-container {"uniqueId":"d060803e","alignment":"right","alignmentMobile":"left","isDynamic":true} --> <!-- wp:generateblocks/button {"uniqueId":"907cc664","hasUrl":true,"backgroundColor":"","textColor":"#ffffff","backgroundColorHover":"","textColorHover":"#f2f5fa","showAdvancedTypography":true,"fontSize":17,"marginRight":"30"} --> <a class="gb-button gb-button-907cc664 gb-button-text" href="#">Privacy Policy</a> <!-- /wp:generateblocks/button --> <!-- wp:generateblocks/button {"uniqueId":"a6a340bc","hasUrl":true,"backgroundColor":"","textColor":"#ffffff","backgroundColorHover":"","textColorHover":"#f2f5fa","showAdvancedTypography":true,"fontSize":17} --> <a class="gb-button gb-button-a6a340bc gb-button-text" href="#">Terms of Service</a> <!-- /wp:generateblocks/button --> <!-- /wp:generateblocks/button-container --> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/grid --> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/container -->',
	},
	template_2: {
		label: _x( 'Full footer 2', 'label', 'gp-premium' ),
		thumbnail: 'site-footer-full-2.jpg',
		content: '<!-- wp:generateblocks/container {"uniqueId":"e224c1dd","paddingTop":"80","paddingRight":"20","paddingBottom":"80","paddingLeft":"20","backgroundColor":"#fafbfc","isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"34307d45","element":"p","alignment":"center","textColor":"#2e3d4d","showAdvancedTypography":true,"fontWeight":"bold","fontSize":14,"textTransform":"uppercase","letterSpacing":0.3,"marginTop":"10"} --> <p class="gb-headline gb-headline-34307d45 gb-headline-text">Your Company Name</p> <!-- /wp:generateblocks/headline --> <!-- wp:generateblocks/container {"uniqueId":"4068688a","paddingTop":"60","paddingRight":"20","paddingBottom":"60","paddingLeft":"20","marginTop":"60","marginBottom":"60","borderSizeTop":"1","borderSizeBottom":"1","borderColor":"#5c7a99","isDynamic":true} --> <!-- wp:generateblocks/grid {"uniqueId":"690686fb","columns":3,"horizontalGap":0,"verticalAlignment":"center","verticalGapMobile":40,"isDynamic":true} --> <!-- wp:generateblocks/container {"uniqueId":"12d457ad","isGrid":true,"gridId":"f5b096f9","width":32,"paddingTop":"0","paddingRight":"20","paddingBottom":"0","paddingLeft":"20","isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"8818b435","element":"p","alignment":"center","showAdvancedTypography":true,"fontWeight":"bold","fontSize":13,"textTransform":"uppercase","letterSpacing":0.2,"marginBottom":"0"} --> <p class="gb-headline gb-headline-8818b435 gb-headline-text">PH +1 000 000 0000</p> <!-- /wp:generateblocks/headline --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/container {"uniqueId":"68ec175a","isGrid":true,"gridId":"f5b096f9","width":36,"paddingTop":"0","paddingRight":"20","paddingBottom":"0","paddingLeft":"20","borderSizeRight":"1","borderSizeLeft":"1","borderSizeTopMobile":"0","borderSizeRightMobile":"0","borderSizeBottomMobile":"0","borderSizeLeftMobile":"0","borderColor":"#5c7a99","isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"cf4dcfab","element":"p","alignment":"center","showAdvancedTypography":true,"fontWeight":"bold","fontSize":13,"textTransform":"uppercase","letterSpacing":0.2,"marginBottom":"0"} --> <p class="gb-headline gb-headline-cf4dcfab gb-headline-text">24 M Drive<br>East Hampton, NY 11937</p> <!-- /wp:generateblocks/headline --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/container {"uniqueId":"47f78435","isGrid":true,"gridId":"f5b096f9","width":32,"paddingTop":"0","paddingRight":"20","paddingBottom":"0","paddingLeft":"20","removeVerticalGapMobile":true,"isDynamic":true} --> <!-- wp:generateblocks/button-container {"uniqueId":"fd601b43","alignment":"center","marginBottom":"0","isDynamic":true} --> <!-- wp:generateblocks/button {"uniqueId":"2800ad9a","hasUrl":false,"hasIcon":true,"removeText":true,"textColor":"#2e3d4d","textColorHover":"#5c7a99","marginRight":"20","iconSize":0.9} --> <span class="gb-button gb-button-2800ad9a"><span class="gb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" aria-hidden="true"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" fill="currentColor"></path></svg></span></span> <!-- /wp:generateblocks/button --> <!-- wp:generateblocks/button {"uniqueId":"eb98a6f6","hasUrl":false,"hasIcon":true,"removeText":true,"textColor":"#2e3d4d","textColorHover":"#5c7a99","marginRight":"20","iconSize":0.9} --> <span class="gb-button gb-button-eb98a6f6"><span class="gb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="currentColor"></path></svg></span></span> <!-- /wp:generateblocks/button --> <!-- wp:generateblocks/button {"uniqueId":"ab839eb9","hasUrl":false,"hasIcon":true,"removeText":true,"textColor":"#2e3d4d","textColorHover":"#5c7a99","marginRight":"20","iconSize":0.8} --> <span class="gb-button gb-button-ab839eb9"><span class="gb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em" aria-hidden="true"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" fill="currentColor"></path></svg></span></span> <!-- /wp:generateblocks/button --> <!-- wp:generateblocks/button {"uniqueId":"5b757c38","hasUrl":false,"hasIcon":true,"removeText":true,"textColor":"#2e3d4d","textColorHover":"#5c7a99","marginRight":"20","iconSize":0.8} --> <span class="gb-button gb-button-5b757c38"><span class="gb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" aria-hidden="true"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" fill="currentColor"></path></svg></span></span> <!-- /wp:generateblocks/button --> <!-- /wp:generateblocks/button-container --> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/grid --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/grid {"uniqueId":"424f95c0","columns":2,"verticalGapMobile":30,"isDynamic":true} --> <!-- wp:generateblocks/container {"uniqueId":"cc32f783","isGrid":true,"gridId":"90341e96","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"1e50faeb","element":"p","alignment":"left","alignmentMobile":"center","showAdvancedTypography":true,"fontWeight":"bold","fontSize":12,"textTransform":"uppercase","letterSpacing":0.2} --> <p class="gb-headline gb-headline-1e50faeb gb-headline-text">© Your Copyright Message</p> <!-- /wp:generateblocks/headline --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/container {"uniqueId":"b706d851","isGrid":true,"gridId":"90341e96","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","removeVerticalGapMobile":true,"isDynamic":true} --> <!-- wp:generateblocks/button-container {"uniqueId":"b4f65930","alignment":"right","alignmentMobile":"center","isDynamic":true} --> <!-- wp:generateblocks/button {"uniqueId":"373aae0d","hasUrl":false,"textColor":"#2e3d4d","textColorHover":"#5c7a99","showAdvancedTypography":true,"fontWeight":"bold","fontSize":12,"textTransform":"uppercase","letterSpacing":0.2,"marginRight":"30"} --> <span class="gb-button gb-button-373aae0d gb-button-text"><strong>PRIVACY POLICY</strong></span> <!-- /wp:generateblocks/button --> <!-- wp:generateblocks/button {"uniqueId":"3cd1cf71","hasUrl":false,"textColor":"#2e3d4d","textColorHover":"#5c7a99","showAdvancedTypography":true,"fontWeight":"bold","fontSize":12,"textTransform":"uppercase","letterSpacing":0.2} --> <span class="gb-button gb-button-3cd1cf71 gb-button-text"><strong>terms of service</strong></span> <!-- /wp:generateblocks/button --> <!-- /wp:generateblocks/button-container --> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/grid --> <!-- /wp:generateblocks/container -->',
	},
};

export default templates;