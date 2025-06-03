sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'prasanth/po/managepo/test/integration/FirstJourney',
		'prasanth/po/managepo/test/integration/pages/POsList',
		'prasanth/po/managepo/test/integration/pages/POsObjectPage',
		'prasanth/po/managepo/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('prasanth/po/managepo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);