import {
	_x,
} from '@wordpress/i18n';

const templates = {
	template_1: {
		label: _x( 'Basic layout with term buttons', 'label', 'gp-premium' ),
		thumbnail: 'content-template-basic.jpg',
		content: '<!-- wp:generateblocks/container {"uniqueId":"d2cafe96","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","paddingSyncUnits":true,"isDynamic":true} --> <!-- wp:generateblocks/button-container {"uniqueId":"6d7bfb40","marginBottom":"15","isDynamic":true} --> <!-- wp:generateblocks/button {"uniqueId":"38620841","hasUrl":true,"backgroundColor":"#000000","textColor":"#ffffff","backgroundColorHover":"#222222","textColorHover":"#ffffff","showAdvancedTypography":true,"fontSize":13,"paddingTop":"5","paddingRight":"10","paddingBottom":"5","paddingLeft":"10","className":"dynamic-term-class","gpDynamicTextType":"terms","gpDynamicLinkType":"term-archives","gpDynamicTextReplace":"Terms","gpDynamicTextTaxonomy":"category"} --> <a class="gb-button gb-button-38620841 gb-button-text dynamic-term-class" href="#">Terms</a> <!-- /wp:generateblocks/button --> <!-- /wp:generateblocks/button-container --> <!-- wp:generateblocks/headline {"uniqueId":"f593ba8c","linkColor":"#000000","linkColorHover":"#858585","showAdvancedTypography":true,"fontWeight":"bold","marginBottom":"30","gpDynamicTextType":"title","gpDynamicLinkType":"single-post","gpDynamicTextReplace":"Post Title"} --> <h2 class="gb-headline gb-headline-f593ba8c gb-headline-text">Post Title</h2> <!-- /wp:generateblocks/headline --> <!-- wp:generateblocks/container {"uniqueId":"1ed16867","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","showAdvancedTypography":true,"fontSize":14,"isDynamic":true} --> <!-- wp:generateblocks/grid {"uniqueId":"27f5a324","columns":2,"verticalAlignment":"center","isDynamic":true} --> <!-- wp:generateblocks/container {"uniqueId":"dc72dc13","isGrid":true,"gridId":"10064c4d","widthMobile":50,"paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","isDynamic":true,"gpInlinePostMeta":true} --> <!-- wp:generatepress/dynamic-image {"imageType":"author-avatar","avatarRounded":true} /--> <!-- wp:generateblocks/headline {"uniqueId":"c7b33e8b","element":"p","marginBottom":"0","marginLeft":"10","gpDynamicTextType":"post-author","gpDynamicLinkType":"author-archives","gpDynamicTextReplace":"Author name"} --> <p class="gb-headline gb-headline-c7b33e8b gb-headline-text">Author name</p> <!-- /wp:generateblocks/headline --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/container {"uniqueId":"ec93a944","isGrid":true,"gridId":"10064c4d","widthMobile":50,"paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","alignment":"right","isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"af8af68e","element":"p","marginBottom":"0","gpDynamicTextType":"post-date","gpDynamicTextReplace":"Post date","gpDynamicDateUpdated":true} --> <p class="gb-headline gb-headline-af8af68e gb-headline-text">Post date</p> <!-- /wp:generateblocks/headline --> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/grid --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/container {"uniqueId":"b70b46a6","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","paddingSyncUnits":true,"marginTop":"30","marginBottom":"30","isDynamic":true} --> <!-- wp:generatepress/dynamic-image {"imageType":"featured-image","imageSize":"medium_large","linkTo":"single-post"} /--> <!-- /wp:generateblocks/container --> <!-- wp:generatepress/dynamic-content {"contentType":"post-excerpt"} /--> <!-- /wp:generateblocks/container -->',
		meta: [
			{ key: '_generate_block_element_editor_width_unit', value: 'px' },
			{ key: '_generate_block_element_editor_width', value: '750' },
			{ key: '_generate_use_theme_post_container', value: true },
		],
	},
	template_2: {
		label: _x( 'Layout with offset content', 'label', 'gp-premium' ),
		thumbnail: 'content-template-offset.jpg',
		content: '<!-- wp:generatepress/dynamic-image {"imageType":"featured-image","imageSize":"large","linkTo":"single-post"} /--> <!-- wp:generateblocks/container {"uniqueId":"05e7d83e","paddingTop":"20","paddingRight":"20","paddingBottom":"20","paddingLeft":"20","paddingSyncUnits":true,"marginTop":"-65","marginRight":"40","marginBottom":"20","marginLeft":"0","backgroundColor":"#ffffff","zindex":1,"showAdvancedTypography":true,"isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"83898f1c","element":"p","linkColor":"#000000","linkColorHover":"#abb8c3","showAdvancedTypography":true,"fontWeight":"700","fontSize":14,"textTransform":"uppercase","marginBottom":"20","className":"dynamic-term-class","gpDynamicTextType":"terms","gpDynamicLinkType":"term-archives","gpDynamicTextReplace":"Category","gpDynamicTextTaxonomy":"category"} --> <p class="gb-headline gb-headline-83898f1c gb-headline-text dynamic-term-class">Category</p> <!-- /wp:generateblocks/headline --> <!-- wp:generateblocks/headline {"uniqueId":"98a0e67b","showAdvancedTypography":true,"fontSize":28,"gpDynamicTextType":"title","gpDynamicLinkType":"single-post","gpDynamicTextReplace":"Title"} --> <h2 class="gb-headline gb-headline-98a0e67b gb-headline-text">Title</h2> <!-- /wp:generateblocks/headline --> <!-- wp:generatepress/dynamic-content {"contentType":"post-excerpt","excerptLength":25,"useThemeMoreLink":false} /--> <!-- wp:generateblocks/container {"uniqueId":"fed802f7","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","paddingSyncUnits":true,"marginTop":"20","isDynamic":true} --> <!-- wp:generateblocks/grid {"uniqueId":"ee363d21","columns":2,"horizontalGap":0,"verticalAlignment":"flex-end","isDynamic":true} --> <!-- wp:generateblocks/container {"uniqueId":"74fcc8db","isGrid":true,"gridId":"b23efd25","width":66.66,"widthMobile":66.66,"paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","marginTop":"15","isDynamic":true,"gpInlinePostMeta":true} --> <!-- wp:generatepress/dynamic-image {"imageType":"author-avatar","avatarSize":35,"avatarRounded":true} /--> <!-- wp:generateblocks/container {"uniqueId":"33ed7660","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","marginLeft":"10","isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"2def9732","element":"p","borderColor":"","showAdvancedTypography":true,"fontSize":15,"marginBottom":"0","borderSizeRight":"0","gpDynamicTextType":"post-author","gpDynamicTextReplace":"Post author name"} --> <p class="gb-headline gb-headline-2def9732 gb-headline-text">Post author name</p> <!-- /wp:generateblocks/headline --> <!-- wp:generateblocks/headline {"uniqueId":"dd34513e","element":"p","showAdvancedTypography":true,"fontSize":12,"marginRight":"10","marginBottom":"0","borderSizeBottom":"0","gpDynamicTextType":"post-date","gpDynamicTextReplace":"Date","gpDynamicDateUpdated":true} --> <p class="gb-headline gb-headline-dd34513e gb-headline-text">Date</p> <!-- /wp:generateblocks/headline --> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/container {"uniqueId":"6d144082","isGrid":true,"gridId":"b23efd25","width":33.33,"widthMobile":33.33,"paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","marginTop":"15","verticalAlignment":"center","alignment":"right","isDynamic":true,"gpInlinePostMetaJustify":"flex-end"} --> <!-- wp:generateblocks/button-container {"uniqueId":"ee5c36a9","alignment":"right","marginTop":"0","isDynamic":true} --> <!-- wp:generateblocks/button {"uniqueId":"7c89fc64","hasUrl":true,"backgroundColor":"","textColor":"#000000","backgroundColorHover":"","textColorHover":"#abb8c3","fontWeight":"700","textTransform":"uppercase","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","gpDynamicLinkType":"single-post"} --> <a class="gb-button gb-button-7c89fc64 gb-button-text" href="#">More</a> <!-- /wp:generateblocks/button --> <!-- /wp:generateblocks/button-container --> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/grid --> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/container -->',
		meta: [
			{ key: '_generate_block_element_editor_width_unit', value: 'px' },
			{ key: '_generate_block_element_editor_width', value: '500' },
			{ key: '_generate_use_theme_post_container', value: false },
		],
	},
	template_3: {
		label: _x( 'Layout with featured image overlay', 'label', 'gp-premim' ),
		thumbnail: 'content-template-overlay.jpg',
		content: '<!-- wp:generateblocks/container {"uniqueId":"99e0f8fe","minHeight":420,"paddingTop":"20","paddingRight":"20","paddingBottom":"20","paddingLeft":"20","borderRadiusTopRight":"12","borderRadiusBottomRight":"12","borderRadiusBottomLeft":"12","borderRadiusTopLeft":"12","gradient":true,"gradientDirection":180,"gradientColorOne":"#000000","gradientColorOneOpacity":0.62,"gradientColorTwoOpacity":0,"gradientSelector":"pseudo-element","textColor":"#ffffff","linkColor":"#ffffff","linkColorHover":"#ffffff","bgImage":{"id":"","image":{"url":"#dynamic-background-image"}},"isDynamic":true,"gpDynamicImageBg":"featured-image"} --> <!-- wp:generateblocks/container {"uniqueId":"864271b1","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","paddingSyncUnits":true,"marginBottom":"10","isDynamic":true,"gpInlinePostMeta":true,"gpInlinePostMetaJustify":"space-between"} --> <!-- wp:generateblocks/headline {"uniqueId":"bc0ec4fa","element":"p","showAdvancedTypography":true,"fontWeight":"700","fontSize":13,"textTransform":"uppercase","marginRight":"10","marginBottom":"0","className":"dynamic-term-class","gpDynamicTextType":"terms","gpDynamicTextReplace":"Category","gpDynamicTextTaxonomy":"category","gpDynamicTextTaxonomySeparator":" / "} --> <p class="gb-headline gb-headline-bc0ec4fa gb-headline-text dynamic-term-class">Category</p> <!-- /wp:generateblocks/headline --> <!-- wp:generateblocks/headline {"uniqueId":"5e2dac4c","element":"p","alignment":"right","showAdvancedTypography":true,"fontSize":12,"marginBottom":"0","hasIcon":true,"iconSize":1.4,"gpDynamicTextType":"comments-number","gpDynamicTextReplace":"COMMENTS","gpDynamicNoCommentsText":"0","gpDynamicSingleCommentText":"1","gpDynamicMultipleCommentsText":"%"} --> <p class="gb-headline gb-headline-5e2dac4c"><span class="gb-icon"><svg stroke-miterlimit="2" stroke-linejoin="round" clip-rule="evenodd" fill-rule="evenodd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7"><path fill-rule="nonzero" d="M.67 0A.674.674 0 000 .67v4.093c0 .367.303.671.67.671h.555V6.73c0 .145.119.265.264.265a.26.26 0 00.157-.052l2.047-1.509h4.104c.366 0 .67-.304.67-.67V.67a.675.675 0 00-.67-.67H.67z"></path></svg></span><span class="gb-headline-text">COMMENTS</span></p> <!-- /wp:generateblocks/headline --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/headline {"uniqueId":"b1e898af","showAdvancedTypography":true,"fontSize":24,"marginUnit":"%","gpDynamicTextType":"title","gpDynamicLinkType":"single-post","gpDynamicTextReplace":"Title"} --> <h2 class="gb-headline gb-headline-b1e898af gb-headline-text">Title</h2> <!-- /wp:generateblocks/headline --> <!-- wp:generateblocks/button-container {"uniqueId":"3413b754","alignment":"right","marginTop":"300","isDynamic":true} --> <!-- wp:generateblocks/button {"uniqueId":"95f40917","hasUrl":true,"backgroundColor":"#ffffff","textColor":"#000000","backgroundColorHover":"#ffffff","backgroundColorHoverOpacity":0.75,"textColorHover":"#000000","borderColor":"#ffffff","borderColorHover":"#ffffff","showAdvancedTypography":true,"fontWeight":"700","fontSize":12,"textTransform":"uppercase","paddingTop":"10","paddingRight":"20","paddingBottom":"10","paddingLeft":"20","borderSizeTop":"1","borderSizeRight":"1","borderSizeBottom":"1","borderSizeLeft":"1","borderRadiusTopRight":"8","borderRadiusBottomRight":"8","borderRadiusBottomLeft":"8","borderRadiusTopLeft":"8","gpDynamicLinkType":"single-post"} --> <a class="gb-button gb-button-95f40917 gb-button-text" href="#">Read More</a> <!-- /wp:generateblocks/button --> <!-- /wp:generateblocks/button-container --> <!-- /wp:generateblocks/container -->',
		meta: [
			{ key: '_generate_block_element_editor_width_unit', value: 'px' },
			{ key: '_generate_block_element_editor_width', value: '500' },
			{ key: '_generate_use_theme_post_container', value: false },
		],
	},
	template_4: {
		label: _x( 'Layout with slanted shape divider', 'label', 'gp-premim' ),
		thumbnail: 'content-template-slant.jpg',
		content: '<!-- wp:generateblocks/container {"uniqueId":"0af7ec3a","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","paddingSyncUnits":true,"borderSizeTop":"0","borderSizeRight":"0","borderSizeBottom":"0","borderSizeLeft":"0","borderColor":"#000000","isDynamic":true} --> <!-- wp:generatepress/dynamic-image {"imageType":"featured-image","imageSize":"large"} /--> <!-- wp:generateblocks/container {"uniqueId":"cc5683f8","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","paddingSyncUnits":true,"marginTop":"0","marginBottom":"0","zindex":1,"showAdvancedTypography":true,"fontSize":14,"shapeDividers":[{"shape":"gb-angle-1","color":"#ffffff","colorOpacity":1,"location":"bottom","height":50,"heightTablet":"","heightMobile":"","width":100,"widthTablet":"","widthMobile":"","flipHorizontally":false,"zindex":""}],"isDynamic":true} /--> <!-- wp:generateblocks/container {"uniqueId":"7f6bf8cd","paddingTop":"0","paddingRight":"25","paddingBottom":"15","paddingLeft":"25","marginTop":"0","marginRight":"0","marginBottom":"0","marginLeft":"0","backgroundColor":"#ffffff","zindex":1,"showAdvancedTypography":true,"shapeDividers":[],"isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"7fd9c317","element":"p","showAdvancedTypography":true,"fontSize":14,"marginBottom":"5","gpDynamicTextType":"post-date","gpDynamicTextReplace":"Post date","gpDynamicDateUpdated":true} --> <p class="gb-headline gb-headline-7fd9c317 gb-headline-text">Post date</p> <!-- /wp:generateblocks/headline --> <!-- wp:generateblocks/headline {"uniqueId":"a8ee15fd","showAdvancedTypography":true,"fontSize":30,"marginBottom":"15","gpDynamicTextType":"title","gpDynamicLinkType":"single-post","gpDynamicTextReplace":"Hello World"} --> <h2 class="gb-headline gb-headline-a8ee15fd gb-headline-text">Hello World</h2> <!-- /wp:generateblocks/headline --> <!-- wp:generatepress/dynamic-content {"contentType":"post-excerpt","excerptLength":25,"useThemeMoreLink":false} /--> <!-- wp:generateblocks/button-container {"uniqueId":"bc9ef703","alignment":"right","marginTop":"15","isDynamic":true} --> <!-- wp:generateblocks/button {"uniqueId":"120ee35e","hasUrl":true,"backgroundColor":"","textColor":"#000000","backgroundColorHover":"#222222","textColorHover":"#ffffff","showAdvancedTypography":true,"fontWeight":"700","textTransform":"uppercase","paddingTop":"15","paddingRight":"20","paddingBottom":"15","paddingLeft":"20","gpDynamicLinkType":"single-post"} --> <a class="gb-button gb-button-120ee35e gb-button-text" href="#">Read More</a> <!-- /wp:generateblocks/button --> <!-- /wp:generateblocks/button-container --> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/container -->',
		meta: [
			{ key: '_generate_block_element_editor_width_unit', value: 'px' },
			{ key: '_generate_block_element_editor_width', value: '500' },
			{ key: '_generate_use_theme_post_container', value: false },
		],
	},
	template_5: {
		label: _x( 'Layout with centered content', 'label', 'gp-premim' ),
		thumbnail: 'content-template-centered.jpg',
		content: '<!-- wp:generatepress/dynamic-image {"imageType":"featured-image","imageSize":"large"} /--> <!-- wp:generateblocks/container {"uniqueId":"5a785d21","paddingTop":"25","paddingRight":"25","paddingBottom":"25","paddingLeft":"25","paddingSyncUnits":true,"backgroundColor":"#ffffff","alignment":"center","showAdvancedTypography":true,"isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"82629d5c","linkColor":"#000000","showAdvancedTypography":true,"fontWeight":"700","fontSize":25,"gpDynamicTextType":"title","gpDynamicLinkType":"single-post","gpDynamicTextReplace":"Hello World"} --> <h2 class="gb-headline gb-headline-82629d5c gb-headline-text">Hello World</h2> <!-- /wp:generateblocks/headline --> <!-- wp:generatepress/dynamic-content {"contentType":"post-excerpt","excerptLength":15,"useThemeMoreLink":false} /--> <!-- wp:generateblocks/button-container {"uniqueId":"ad806696","alignment":"center","marginTop":"20","isDynamic":true} --> <!-- wp:generateblocks/button {"uniqueId":"a1b8a609","hasUrl":true,"backgroundColor":"#cf2e2e","textColor":"#ffffff","backgroundColorHover":"#222222","textColorHover":"#ffffff","showAdvancedTypography":true,"fontSize":15,"textTransform":"uppercase","paddingTop":"8","paddingRight":"20","paddingBottom":"8","paddingLeft":"20","borderRadiusTopRight":"50","borderRadiusBottomRight":"50","borderRadiusBottomLeft":"50","borderRadiusTopLeft":"50","gpDynamicLinkType":"single-post"} --> <a class="gb-button gb-button-a1b8a609 gb-button-text" href="#">Read more</a> <!-- /wp:generateblocks/button --> <!-- /wp:generateblocks/button-container --> <!-- /wp:generateblocks/container -->',
		meta: [
			{ key: '_generate_block_element_editor_width_unit', value: 'px' },
			{ key: '_generate_block_element_editor_width', value: '500' },
			{ key: '_generate_use_theme_post_container', value: false },
		],
	},
	template_6: {
		label: _x( 'Layout with borders', 'label', 'gp-premim' ),
		thumbnail: 'content-template-borders.jpg',
		content: '<!-- wp:generateblocks/container {"uniqueId":"0af4cc7c","paddingTop":"5","paddingRight":"5","paddingBottom":"5","paddingLeft":"5","paddingSyncUnits":true,"borderSizeTop":"1","borderSizeRight":"1","borderSizeBottom":"1","borderSizeLeft":"1","borderRadiusTopRight":"2","borderRadiusBottomRight":"2","borderRadiusBottomLeft":"2","borderRadiusTopLeft":"2","borderColor":"#b6b6b6","backgroundColor":"#ffffff","isDynamic":true} --> <!-- wp:generatepress/dynamic-image {"imageType":"featured-image","imageSize":"large"} /--> <!-- wp:generateblocks/container {"uniqueId":"b69b5c43","paddingTop":"30","paddingRight":"30","paddingBottom":"30","paddingLeft":"30","paddingSyncUnits":true,"showAdvancedTypography":true,"isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"8dfa4238","element":"p","textColor":"#0693e3","showAdvancedTypography":true,"fontWeight":"700","fontSize":14,"textTransform":"uppercase","marginBottom":"5","className":"dynamic-term-class","gpDynamicTextType":"terms","gpDynamicLinkType":"term-archives","gpDynamicTextReplace":"Terms","gpDynamicTextTaxonomy":"category"} --> <p class="gb-headline gb-headline-8dfa4238 gb-headline-text dynamic-term-class">Terms</p> <!-- /wp:generateblocks/headline --> <!-- wp:generateblocks/headline {"uniqueId":"29491daa","showAdvancedTypography":true,"fontSize":30,"marginBottom":"15","gpDynamicTextType":"title","gpDynamicLinkType":"single-post","gpDynamicTextReplace":"Hello World"} --> <h2 class="gb-headline gb-headline-29491daa gb-headline-text">Hello World</h2> <!-- /wp:generateblocks/headline --> <!-- wp:generatepress/dynamic-content {"contentType":"post-excerpt","excerptLength":25,"useThemeMoreLink":false} /--> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/container {"uniqueId":"d5dadc43","paddingTop":"15","paddingRight":"10","paddingBottom":"10","paddingLeft":"10","borderSizeTop":"1","borderColor":"#b6b6b6","showAdvancedTypography":true,"fontSize":14,"isDynamic":true} --> <!-- wp:generateblocks/grid {"uniqueId":"3da68acd","columns":2,"verticalAlignment":"center","isDynamic":true} --> <!-- wp:generateblocks/container {"uniqueId":"2c30b1f9","isGrid":true,"gridId":"3da68acd","widthMobile":50,"paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","isDynamic":true} --> <!-- wp:generateblocks/headline {"uniqueId":"fc06eba3","element":"p","textColor":"#b6b6b6","showAdvancedTypography":true,"fontSize":14,"marginBottom":"0","gpDynamicTextType":"post-date","gpDynamicTextReplace":"Post date","gpDynamicTextTaxonomy":"category","gpDynamicDateUpdated":true} --> <p class="gb-headline gb-headline-fc06eba3 gb-headline-text">Post date</p> <!-- /wp:generateblocks/headline --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/container {"uniqueId":"9bb8c373","isGrid":true,"gridId":"3da68acd","widthMobile":50,"paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","isDynamic":true} --> <!-- wp:generateblocks/button-container {"uniqueId":"afc412f8","alignment":"right","isDynamic":true} --> <!-- wp:generateblocks/button {"uniqueId":"0fcad1cd","hasUrl":true,"backgroundColor":"","textColor":"#0693e3","backgroundColorHover":"#222222","textColorHover":"#ffffff","borderColor":"#0693e3","borderColorHover":"#222222","textTransform":"uppercase","paddingTop":"8","paddingRight":"12","paddingBottom":"8","paddingLeft":"12","borderSizeTop":"2","borderSizeRight":"2","borderSizeBottom":"2","borderSizeLeft":"2","borderRadiusTopRight":"2","borderRadiusBottomRight":"2","borderRadiusBottomLeft":"2","borderRadiusTopLeft":"2","gpDynamicLinkType":"single-post"} --> <a class="gb-button gb-button-0fcad1cd gb-button-text" href="#">Read more</a> <!-- /wp:generateblocks/button --> <!-- /wp:generateblocks/button-container --> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/grid --> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/container -->',
		meta: [
			{ key: '_generate_block_element_editor_width_unit', value: 'px' },
			{ key: '_generate_block_element_editor_width', value: '500' },
			{ key: '_generate_use_theme_post_container', value: false },
		],
	},
	template_7: {
		label: _x( 'Landscape layout', 'label', 'gp-premium' ),
		thumbnail: 'content-template-landscape.jpg',
		content: '<!-- wp:generateblocks/container {"uniqueId":"918d68ce","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","paddingSyncUnits":true,"isDynamic":true} --> <!-- wp:generateblocks/grid {"uniqueId":"ae18e4a9","columns":2,"verticalGapMobile":10,"isDynamic":true} --> <!-- wp:generateblocks/container {"uniqueId":"ff15641f","isGrid":true,"gridId":"ae18e4a9","width":40,"widthTablet":40,"paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","isDynamic":true} --> <!-- wp:generatepress/dynamic-image {"imageType":"featured-image","imageSize":"medium_large","linkTo":"single-post"} /--> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/container {"uniqueId":"64596747","isGrid":true,"gridId":"ae18e4a9","width":60,"widthTablet":60,"paddingTop":"0","paddingRight":"20","paddingBottom":"10","paddingLeft":"0","paddingTopMobile":"10","paddingRightMobile":"10","paddingBottomMobile":"10","paddingLeftMobile":"10","verticalAlignment":"center","showAdvancedTypography":true,"isDynamic":true} --> <!-- wp:generateblocks/container {"uniqueId":"ce3f6f48","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0","marginBottom":"10","showAdvancedTypography":true,"isDynamic":true,"gpInlinePostMeta":true} --> <!-- wp:generateblocks/headline {"uniqueId":"fdbba1f9","element":"p","showAdvancedTypography":true,"fontWeight":"900","fontSize":14,"textTransform":"uppercase","marginRight":"10","marginBottom":"0","paddingRight":"10","borderSizeRight":"1","className":"dynamic-term-class","gpDynamicTextType":"terms","gpDynamicTextReplace":"Category","gpDynamicTextTaxonomy":"category"} --> <p class="gb-headline gb-headline-fdbba1f9 gb-headline-text dynamic-term-class">Category</p> <!-- /wp:generateblocks/headline --> <!-- wp:generateblocks/headline {"uniqueId":"6df4d39e","element":"p","showAdvancedTypography":true,"fontSize":14,"marginRight":"10","marginBottom":"0","gpDynamicTextType":"post-date","gpDynamicTextReplace":"Date","gpDynamicDateUpdated":true} --> <p class="gb-headline gb-headline-6df4d39e gb-headline-text">Date</p> <!-- /wp:generateblocks/headline --> <!-- /wp:generateblocks/container --> <!-- wp:generateblocks/headline {"uniqueId":"84923e14","showAdvancedTypography":true,"fontSize":28,"marginBottom":"20","gpDynamicTextType":"title","gpDynamicLinkType":"single-post","gpDynamicTextReplace":"Title"} --> <h2 class="gb-headline gb-headline-84923e14 gb-headline-text">Title</h2> <!-- /wp:generateblocks/headline --> <!-- wp:generatepress/dynamic-content {"contentType":"post-excerpt","excerptLength":20} /--> <!-- /wp:generateblocks/container --> <!-- /wp:generateblocks/grid --> <!-- /wp:generateblocks/container -->',
		meta: [
			{ key: '_generate_block_element_editor_width_unit', value: 'px' },
			{ key: '_generate_block_element_editor_width', value: '800' },
			{ key: '_generate_use_theme_post_container', value: true },
		],
	},
};

export default templates;