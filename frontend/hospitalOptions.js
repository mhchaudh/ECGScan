// I prompted ChatGPT to parse a CSV file containing hospital data from the Government of Canada website and then converted the parsed data into a JavaScript object. 

export const hospitalOptions = {
  "Alberta": [
    {
      "label": "Alberta Children's Hospital",
      "value": {
        "lat": 51.074582,
        "lon": -114.148426,
        "display_name": "Alberta Children's Hospital, Calgary, Alberta"
      }
    },
    {
      "label": "Devon General Hospital",
      "value": {
        "lat": 53.351493,
        "lon": -113.730785,
        "display_name": "Devon General Hospital, Devon, Alberta"
      }
    },
    {
      "label": "Didsbury District Health Services",
      "value": {
        "lat": 51.661795,
        "lon": -114.123674,
        "display_name": "Didsbury District Health Services, Didsbury, Alberta"
      }
    },
    {
      "label": "Drayton Valley Hospital & Care Centre",
      "value": {
        "lat": 53.211841,
        "lon": -114.969193,
        "display_name": "Drayton Valley Hospital & Care Centre, Drayton Valley, Alberta"
      }
    },
    {
      "label": "Drumheller Health Centre",
      "value": {
        "lat": 51.469807,
        "lon": -112.725934,
        "display_name": "Drumheller Health Centre, Drumheller, Alberta"
      }
    },
    {
      "label": "Edson Healthcare Centre",
      "value": {
        "lat": 53.59182,
        "lon": -116.407,
        "display_name": "Edson Healthcare Centre, Edson, Alberta"
      }
    },
    {
      "label": "Elk Point Healthcare Centre",
      "value": {
        "lat": 53.896974,
        "lon": -110.905805,
        "display_name": "Elk Point Healthcare Centre, Elk Point, Alberta"
      }
    },
    {
      "label": "Alberta Hospital Edmonton",
      "value": {
        "lat": 53.636387,
        "lon": -113.374023,
        "display_name": "Alberta Hospital Edmonton, Edmonton, Alberta"
      }
    },
    {
      "label": "Fairview Health Complex",
      "value": {
        "lat": 56.070966,
        "lon": -118.384552,
        "display_name": "Fairview Health Complex, Fairview, Alberta"
      }
    },
    {
      "label": "Foothills Medical Centre",
      "value": {
        "lat": 51.064283,
        "lon": -114.133948,
        "display_name": "Foothills Medical Centre, Calgary, Alberta"
      }
    },
    {
      "label": "Fort Macleod Health Centre",
      "value": {
        "lat": 49.726332,
        "lon": -113.393247,
        "display_name": "Fort Macleod Health Centre, Fort Macleod, Alberta"
      }
    },
    {
      "label": "Fort Mcmurray Community Cancer Centre",
      "value": {
        "lat": 56.717683,
        "lon": -111.361801,
        "display_name": "Fort Mcmurray Community Cancer Centre, Fort Mcmurray, Alberta"
      }
    },
    {
      "label": "Fort Saskatchewan Community Hospital",
      "value": {
        "lat": 53.693159,
        "lon": -113.213229,
        "display_name": "Fort Saskatchewan Community Hospital, Fort Saskatchewan, Alberta"
      }
    },
    {
      "label": "Fort Saskatchewan Health Centre",
      "value": {
        "lat": 53.703321,
        "lon": -113.222524,
        "display_name": "Fort Saskatchewan Health Centre, Fort Saskatchewan, Alberta"
      }
    },
    {
      "label": "Fox Creek Health Care Centre",
      "value": {
        "lat": 54.404643,
        "lon": -116.801403,
        "display_name": "Fox Creek Health Care Centre, Fox Creek, Alberta"
      }
    },
    {
      "label": "Glenrose Rehabilitation Hospital",
      "value": {
        "lat": 53.560101,
        "lon": -113.497653,
        "display_name": "Glenrose Rehabilitation Hospital, Edmonton, Alberta"
      }
    },
    {
      "label": "Grande Cache Community Health Complex",
      "value": {
        "lat": 53.891517,
        "lon": -119.119218,
        "display_name": "Grande Cache Community Health Complex, Grande Cache, Alberta"
      }
    },
    {
      "label": "Grande Prairie Cancer Centre",
      "value": {
        "lat": 55.175391,
        "lon": -118.788449,
        "display_name": "Grande Prairie Cancer Centre, Grande Prairie, Alberta"
      }
    },
    {
      "label": "Grey Nuns Community Hospital",
      "value": {
        "lat": 53.461583,
        "lon": -113.429724,
        "display_name": "Grey Nuns Community Hospital, Edmonton, Alberta"
      }
    },
    {
      "label": "Grimshaw / Berwyn and District Community Health Centre",
      "value": {
        "lat": 56.190388,
        "lon": -117.62725,
        "display_name": "Grimshaw / Berwyn and District Community Health Centre, Grimshaw, Alberta"
      }
    },
    {
      "label": "Athabasca Healthcare Centre",
      "value": {
        "lat": 54.71724,
        "lon": -113.254056,
        "display_name": "Athabasca Healthcare Centre, Athabasca, Alberta"
      }
    },
    {
      "label": "Hanna Health Centre",
      "value": {
        "lat": 51.648919,
        "lon": -111.928204,
        "display_name": "Hanna Health Centre, Hanna, Alberta"
      }
    },
    {
      "label": "Hardisty Health Centre",
      "value": {
        "lat": 52.669316,
        "lon": -111.307616,
        "display_name": "Hardisty Health Centre, Hardisty, Alberta"
      }
    },
    {
      "label": "High Prairie Health Complex",
      "value": {
        "lat": 55.431645,
        "lon": -116.454926,
        "display_name": "High Prairie Health Complex, High Prairie, Alberta"
      }
    },
    {
      "label": "High River General Hospital",
      "value": {
        "lat": 50.575103,
        "lon": -113.879948,
        "display_name": "High River General Hospital, High River, Alberta"
      }
    },
    {
      "label": "Hinton Healthcare Centre",
      "value": {
        "lat": 53.398281,
        "lon": -117.58529,
        "display_name": "Hinton Healthcare Centre, Hinton, Alberta"
      }
    },
    {
      "label": "Innisfail Health Centre",
      "value": {
        "lat": 52.019015,
        "lon": -113.95144,
        "display_name": "Innisfail Health Centre, Innisfail, Alberta"
      }
    },
    {
      "label": "Jasper (Seton) Healthcare Centre",
      "value": {
        "lat": 52.876107,
        "lon": -118.084299,
        "display_name": "Jasper (Seton) Healthcare Centre, Jasper, Alberta"
      }
    },
    {
      "label": "Killam General Hospital",
      "value": {
        "lat": 52.788934,
        "lon": -111.859543,
        "display_name": "Killam General Hospital, Killam, Alberta"
      }
    },
    {
      "label": "LAC LA BICHE HEALTHCARE CENTRE",
      "value": {
        "lat": 54.764751,
        "lon": -111.964494,
        "display_name": "LAC LA BICHE HEALTHCARE CENTRE, Lac La Biche, Alberta"
      }
    },
    {
      "label": "Lacombe Hospital & Care Centre",
      "value": {
        "lat": 52.460677,
        "lon": -113.741104,
        "display_name": "Lacombe Hospital & Care Centre, Lacombe, Alberta"
      }
    },
    {
      "label": "Lamont Health Care Centre",
      "value": {
        "lat": 53.762612,
        "lon": -112.788581,
        "display_name": "Lamont Health Care Centre, Lamont, Alberta"
      }
    },
    {
      "label": "Leduc Community Hospital",
      "value": {
        "lat": 53.254836,
        "lon": -113.545331,
        "display_name": "Leduc Community Hospital, Leduc, Alberta"
      }
    },
    {
      "label": "Barrhead Healthcare Centre",
      "value": {
        "lat": 54.119704,
        "lon": -114.400168,
        "display_name": "Barrhead Healthcare Centre, Barrhead, Alberta"
      }
    },
    {
      "label": "Manning Community Health Centre",
      "value": {
        "lat": 56.927996,
        "lon": -117.621417,
        "display_name": "Manning Community Health Centre, Manning, Alberta"
      }
    },
    {
      "label": "Margery e. Yuill Cancer Centre",
      "value": {
        "lat": 50.03456,
        "lon": -110.70232,
        "display_name": "Margery e. Yuill Cancer Centre, Medicine Hat, Alberta"
      }
    },
    {
      "label": "Mayerthorpe Health Care Centre",
      "value": {
        "lat": 53.952194,
        "lon": -115.147217,
        "display_name": "Mayerthorpe Health Care Centre, Mayerthorpe, Alberta"
      }
    },
    {
      "label": "Mazankowski Alberta Heart Institute",
      "value": {
        "lat": 53.520191,
        "lon": -113.522727,
        "display_name": "Mazankowski Alberta Heart Institute, Edmonton, Alberta"
      }
    },
    {
      "label": "Medicine Hat Regional Hospital",
      "value": {
        "lat": 50.034733,
        "lon": -110.702725,
        "display_name": "Medicine Hat Regional Hospital, Medicine Hat, Alberta"
      }
    },
    {
      "label": "Milk River Health Centre",
      "value": {
        "lat": 49.148256,
        "lon": -112.076354,
        "display_name": "Milk River Health Centre, Milk River, Alberta"
      }
    },
    {
      "label": "Mineral Springs Hospital",
      "value": {
        "lat": 51.17914,
        "lon": -115.574675,
        "display_name": "Mineral Springs Hospital, Banff, Alberta"
      }
    },
    {
      "label": "Misericordia Community Hospital",
      "value": {
        "lat": 53.521028,
        "lon": -113.61232,
        "display_name": "Misericordia Community Hospital, Edmonton, Alberta"
      }
    },
    {
      "label": "Northeast Community Health Centre",
      "value": {
        "lat": 53.604272,
        "lon": -113.417472,
        "display_name": "Northeast Community Health Centre, Edmonton, Alberta"
      }
    },
    {
      "label": "Northern Lights Regional Health Centre",
      "value": {
        "lat": 56.716352,
        "lon": -111.362239,
        "display_name": "Northern Lights Regional Health Centre, Fort Mcmurray, Alberta"
      }
    },
    {
      "label": "Northwest Health Centre",
      "value": {
        "lat": 58.513526,
        "lon": -117.162153,
        "display_name": "Northwest Health Centre, High Level, Alberta"
      }
    },
    {
      "label": "Oilfields General Hospital",
      "value": {
        "lat": 50.678014,
        "lon": -114.234413,
        "display_name": "Oilfields General Hospital, Black Diamond, Alberta"
      }
    },
    {
      "label": "Olds Hospital & Care Centre",
      "value": {
        "lat": 51.801313,
        "lon": -114.117835,
        "display_name": "Olds Hospital & Care Centre, Olds, Alberta"
      }
    },
    {
      "label": "Peace River Community Health Centre",
      "value": {
        "lat": 56.231053,
        "lon": -117.354442,
        "display_name": "Peace River Community Health Centre, Peace River, Alberta"
      }
    },
    {
      "label": "Peter Lougheed Centre",
      "value": {
        "lat": 51.078059,
        "lon": -113.98295,
        "display_name": "Peter Lougheed Centre, Calgary, Alberta"
      }
    },
    {
      "label": "Bassano Health Centre",
      "value": {
        "lat": 50.789262,
        "lon": -112.461057,
        "display_name": "Bassano Health Centre, Bassano, Alberta"
      }
    },
    {
      "label": "Pincher Creek Health Centre",
      "value": {
        "lat": 49.493452,
        "lon": -113.946935,
        "display_name": "Pincher Creek Health Centre, Pincher Creek, Alberta"
      }
    },
    {
      "label": "Piyami Health Centre",
      "value": {
        "lat": 49.873199,
        "lon": -112.777312,
        "display_name": "Piyami Health Centre, Picture Butte, Alberta"
      }
    },
    {
      "label": "Ponoka Hospital and Care Centre",
      "value": {
        "lat": 52.684724,
        "lon": -113.589511,
        "display_name": "Ponoka Hospital and Care Centre, Ponoka, Alberta"
      }
    },
    {
      "label": "Provost Health Centre",
      "value": {
        "lat": 52.357969,
        "lon": -110.26484,
        "display_name": "Provost Health Centre, Provost, Alberta"
      }
    },
    {
      "label": "Beaverlodge Municipal Hospital",
      "value": {
        "lat": 55.21361,
        "lon": -119.424093,
        "display_name": "Beaverlodge Municipal Hospital, Beaverlodge, Alberta"
      }
    },
    {
      "label": "Queen Elizabeth Ii Hospital",
      "value": {
        "lat": 55.175292,
        "lon": -118.786568,
        "display_name": "Queen Elizabeth Ii Hospital, Grande Prairie, Alberta"
      }
    },
    {
      "label": "Raymond Health Centre",
      "value": {
        "lat": 49.4647,
        "lon": -112.650584,
        "display_name": "Raymond Health Centre, Raymond, Alberta"
      }
    },
    {
      "label": "Red Deer Regional Hospital Centre",
      "value": {
        "lat": 52.260779,
        "lon": -113.818671,
        "display_name": "Red Deer Regional Hospital Centre, Red Deer, Alberta"
      }
    },
    {
      "label": "Redwater Health Centre",
      "value": {
        "lat": 53.949599,
        "lon": -113.125581,
        "display_name": "Redwater Health Centre, Redwater, Alberta"
      }
    },
    {
      "label": "Richmond Road Diagnostic & Treatment Centre",
      "value": {
        "lat": 51.035999,
        "lon": -114.110878,
        "display_name": "Richmond Road Diagnostic & Treatment Centre, Calgary, Alberta"
      }
    },
    {
      "label": "Rimbey Hospital & Care Centre",
      "value": {
        "lat": 52.639697,
        "lon": -114.245959,
        "display_name": "Rimbey Hospital & Care Centre, Rimbey, Alberta"
      }
    },
    {
      "label": "Rocky Mountain House Health Centre",
      "value": {
        "lat": 52.378568,
        "lon": -114.920205,
        "display_name": "Rocky Mountain House Health Centre, Rocky Mountain House, Alberta"
      }
    },
    {
      "label": "Rockyview General Hospital",
      "value": {
        "lat": 50.989822,
        "lon": -114.096632,
        "display_name": "Rockyview General Hospital, Calgary, Alberta"
      }
    },
    {
      "label": "Royal Alexandra Hospital",
      "value": {
        "lat": 53.557387,
        "lon": -113.497772,
        "display_name": "Royal Alexandra Hospital, Edmonton, Alberta"
      }
    },
    {
      "label": "Sacred Heart Community Health Centre",
      "value": {
        "lat": 55.710475,
        "lon": -116.914218,
        "display_name": "Sacred Heart Community Health Centre, Mclennan, Alberta"
      }
    },
    {
      "label": "Slave Lake Healthcare Centre",
      "value": {
        "lat": 55.284356,
        "lon": -114.760739,
        "display_name": "Slave Lake Healthcare Centre, Slave Lake, Alberta"
      }
    },
    {
      "label": "Smoky Lake (George Mcdougall Memorial) Healthcare Centre",
      "value": {
        "lat": 54.121133,
        "lon": -112.465024,
        "display_name": "Smoky Lake (George Mcdougall Memorial) Healthcare Centre, Smoky Lake, Alberta"
      }
    },
    {
      "label": "South Health Campus",
      "value": {
        "lat": 50.882076,
        "lon": -113.951144,
        "display_name": "South Health Campus, Calgary, Alberta"
      }
    },
    {
      "label": "St. Joseph's General Hospital - Vegreville",
      "value": {
        "lat": 53.493974,
        "lon": -112.033805,
        "display_name": "St. Joseph's General Hospital - Vegreville, Vegreville, Alberta"
      }
    },
    {
      "label": "St. Mary's Camrose",
      "value": {
        "lat": 53.014293,
        "lon": -112.83054,
        "display_name": "St. Mary's Camrose, Camrose, Alberta"
      }
    },
    {
      "label": "St. Paul Healthcare Centre",
      "value": {
        "lat": 53.988844,
        "lon": -111.29045,
        "display_name": "St. Paul Healthcare Centre, St Paul, Alberta"
      }
    },
    {
      "label": "St. Theresa General Hospital",
      "value": {
        "lat": 58.385884,
        "lon": -116.012207,
        "display_name": "St. Theresa General Hospital, Fort Vermilion, Alberta"
      }
    },
    {
      "label": "Stettler Hospital & Care Centre",
      "value": {
        "lat": 52.323974,
        "lon": -112.72346,
        "display_name": "Stettler Hospital & Care Centre, Stettler, Alberta"
      }
    },
    {
      "label": "Strathmore District Health Services",
      "value": {
        "lat": 51.060882,
        "lon": -113.386513,
        "display_name": "Strathmore District Health Services, Strathmore, Alberta"
      }
    },
    {
      "label": "Sturgeon Community Hospital",
      "value": {
        "lat": 53.65524,
        "lon": -113.625711,
        "display_name": "Sturgeon Community Hospital, St Albert, Alberta"
      }
    },
    {
      "label": "Sundre Hospital & Care Centre",
      "value": {
        "lat": 51.807789,
        "lon": -114.635486,
        "display_name": "Sundre Hospital & Care Centre, Sundre, Alberta"
      }
    },
    {
      "label": "Swan Hills Healthcare Centre",
      "value": {
        "lat": 54.72748,
        "lon": -115.403079,
        "display_name": "Swan Hills Healthcare Centre, Swan Hills, Alberta"
      }
    },
    {
      "label": "Taber Health Centre",
      "value": {
        "lat": 49.785013,
        "lon": -112.165138,
        "display_name": "Taber Health Centre, Taber, Alberta"
      }
    },
    {
      "label": "Three Hills Health Centre",
      "value": {
        "lat": 51.707802,
        "lon": -113.251086,
        "display_name": "Three Hills Health Centre, Three Hills, Alberta"
      }
    },
    {
      "label": "Tofield Health Centre",
      "value": {
        "lat": 53.372657,
        "lon": -112.651099,
        "display_name": "Tofield Health Centre, Tofield, Alberta"
      }
    },
    {
      "label": "Tom Baker Cancer Centre",
      "value": {
        "lat": 51.063131,
        "lon": -114.133258,
        "display_name": "Tom Baker Cancer Centre, Calgary, Alberta"
      }
    },
    {
      "label": "Two Hills Health Centre",
      "value": {
        "lat": 53.713201,
        "lon": -111.731815,
        "display_name": "Two Hills Health Centre, Two Hills, Alberta"
      }
    },
    {
      "label": "University of Alberta Hospital and Stollery Children's Hospital",
      "value": {
        "lat": 53.520634,
        "lon": -113.524527,
        "display_name": "University of Alberta Hospital and Stollery Children's Hospital, Edmonton, Alberta"
      }
    },
    {
      "label": "Big Country Hospital",
      "value": {
        "lat": 51.351289,
        "lon": -110.479297,
        "display_name": "Big Country Hospital, Oyen, Alberta"
      }
    },
    {
      "label": "Valleyview Health Centre",
      "value": {
        "lat": 55.066647,
        "lon": -117.273404,
        "display_name": "Valleyview Health Centre, Valleyview, Alberta"
      }
    },
    {
      "label": "Vermilion Health Centre",
      "value": {
        "lat": 53.354773,
        "lon": -110.873079,
        "display_name": "Vermilion Health Centre, Vermilion, Alberta"
      }
    },
    {
      "label": "Viking Health Centre",
      "value": {
        "lat": 53.099663,
        "lon": -111.776445,
        "display_name": "Viking Health Centre, Viking, Alberta"
      }
    },
    {
      "label": "Vulcan Community Health Centre",
      "value": {
        "lat": 50.396101,
        "lon": -113.2588,
        "display_name": "Vulcan Community Health Centre, Vulcan, Alberta"
      }
    },
    {
      "label": "Wainwright Health Centre",
      "value": {
        "lat": 52.840949,
        "lon": -110.865862,
        "display_name": "Wainwright Health Centre, Wainwright, Alberta"
      }
    },
    {
      "label": "Westlock Healthcare Centre (h)",
      "value": {
        "lat": 54.14653,
        "lon": -113.853259,
        "display_name": "Westlock Healthcare Centre (h), Westlock, Alberta"
      }
    },
    {
      "label": "Westview Health Centre",
      "value": {
        "lat": 53.537465,
        "lon": -113.977133,
        "display_name": "Westview Health Centre, Stony Plain, Alberta"
      }
    },
    {
      "label": "Wetaskiwin Hospital & Care Centre",
      "value": {
        "lat": 52.986764,
        "lon": -113.367947,
        "display_name": "Wetaskiwin Hospital & Care Centre, Wetaskiwin, Alberta"
      }
    },
    {
      "label": "Whitecourt Healthcare Centre",
      "value": {
        "lat": 54.131598,
        "lon": -115.674435,
        "display_name": "Whitecourt Healthcare Centre, Whitecourt, Alberta"
      }
    },
    {
      "label": "Bonnyville Community Cancer Centre",
      "value": {
        "lat": 54.26373,
        "lon": -110.7393,
        "display_name": "Bonnyville Community Cancer Centre, Bonnyville, Alberta"
      }
    },
    {
      "label": "Bonnyville Health Centre",
      "value": {
        "lat": 54.263753,
        "lon": -110.741492,
        "display_name": "Bonnyville Health Centre, Bonnyville, Alberta"
      }
    },
    {
      "label": "Bow Island Health Centre",
      "value": {
        "lat": 49.865548,
        "lon": -111.379399,
        "display_name": "Bow Island Health Centre, Bow Island, Alberta"
      }
    },
    {
      "label": "Boyle Healthcare Centre",
      "value": {
        "lat": 54.588366,
        "lon": -112.801974,
        "display_name": "Boyle Healthcare Centre, Boyle, Alberta"
      }
    },
    {
      "label": "Boyle Mccauley Health Centre",
      "value": {
        "lat": 53.55136,
        "lon": -113.486,
        "display_name": "Boyle Mccauley Health Centre, Edmonton, Alberta"
      }
    },
    {
      "label": "Brooks Health Centre",
      "value": {
        "lat": 50.567656,
        "lon": -111.890977,
        "display_name": "Brooks Health Centre, Brooks, Alberta"
      }
    },
    {
      "label": "Canmore General Hospital",
      "value": {
        "lat": 51.09301,
        "lon": -115.350651,
        "display_name": "Canmore General Hospital, Canmore, Alberta"
      }
    },
    {
      "label": "Cardston Health Centre",
      "value": {
        "lat": 49.201947,
        "lon": -113.305761,
        "display_name": "Cardston Health Centre, Cardston, Alberta"
      }
    },
    {
      "label": "Centennial Centre for Mental Health and Brain Injury",
      "value": {
        "lat": 52.648905,
        "lon": -113.575936,
        "display_name": "Centennial Centre for Mental Health and Brain Injury, Ponoka, Alberta"
      }
    },
    {
      "label": "Central Alberta Cancer Centre",
      "value": {
        "lat": 52.260627,
        "lon": -113.818387,
        "display_name": "Central Alberta Cancer Centre, Red Deer, Alberta"
      }
    },
    {
      "label": "Central Peace Health Complex",
      "value": {
        "lat": 55.776981,
        "lon": -118.838754,
        "display_name": "Central Peace Health Complex, Spirit River, Alberta"
      }
    },
    {
      "label": "Chinook Regional Hospital",
      "value": {
        "lat": 49.68535,
        "lon": -112.815185,
        "display_name": "Chinook Regional Hospital, Lethbridge, Alberta"
      }
    },
    {
      "label": "Claresholm General Hospital",
      "value": {
        "lat": 50.018656,
        "lon": -113.582623,
        "display_name": "Claresholm General Hospital, Claresholm, Alberta"
      }
    },
    {
      "label": "Coaldale Health Centre",
      "value": {
        "lat": 49.725825,
        "lon": -112.607294,
        "display_name": "Coaldale Health Centre, Coaldale, Alberta"
      }
    },
    {
      "label": "Cold Lake Healthcare Centre",
      "value": {
        "lat": 54.465874,
        "lon": -110.199018,
        "display_name": "Cold Lake Healthcare Centre, Cold Lake, Alberta"
      }
    },
    {
      "label": "Consort Hospital",
      "value": {
        "lat": 52.00984,
        "lon": -110.782018,
        "display_name": "Consort Hospital, Consort, Alberta"
      }
    },
    {
      "label": "Coronation Hspital & Care Centre",
      "value": {
        "lat": 52.096264,
        "lon": -111.459203,
        "display_name": "Coronation Hspital & Care Centre, Coronation, Alberta"
      }
    },
    {
      "label": "Covenant Health Our Lady of the Rosary Hospital",
      "value": {
        "lat": 52.22344,
        "lon": -111.906862,
        "display_name": "Covenant Health Our Lady of the Rosary Hospital, Castor, Alberta"
      }
    },
    {
      "label": "Cross Cancer Institute",
      "value": {
        "lat": 53.518262,
        "lon": -113.531079,
        "display_name": "Cross Cancer Institute, Edmonton, Alberta"
      }
    },
    {
      "label": "Crowsnest Pass Health Centre",
      "value": {
        "lat": 49.613174,
        "lon": -114.473625,
        "display_name": "Crowsnest Pass Health Centre, Blairmore, Alberta"
      }
    },
    {
      "label": "Daysland Health Centre",
      "value": {
        "lat": 52.868425,
        "lon": -112.272521,
        "display_name": "Daysland Health Centre, Daysland, Alberta"
      }
    }
  ],
  "British Columbia": [
    {
      "label": "Kitimat Hospital & Health Centre",
      "value": {
        "lat": 54.050483,
        "lon": -128.647237,
        "display_name": "Kitimat Hospital & Health Centre, Kitimat, British Columbia"
      }
    },
    {
      "label": "Kootenay Boundary Regional Hospital",
      "value": {
        "lat": 49.103275,
        "lon": -117.701449,
        "display_name": "Kootenay Boundary Regional Hospital, Trail, British Columbia"
      }
    },
    {
      "label": "Kootenay Lake Hospital",
      "value": {
        "lat": 49.495025,
        "lon": -117.284817,
        "display_name": "Kootenay Lake Hospital, Nelson, British Columbia"
      }
    },
    {
      "label": "Lady Minto Gulf Islands Hospital",
      "value": {
        "lat": 48.861445,
        "lon": -123.508599,
        "display_name": "Lady Minto Gulf Islands Hospital, Salt Spring Island, British Columbia"
      }
    },
    {
      "label": "Ladysmith Community Health Centre",
      "value": {
        "lat": 48.995742,
        "lon": -123.827634,
        "display_name": "Ladysmith Community Health Centre, Ladysmith, British Columbia"
      }
    },
    {
      "label": "Lakes District Hospital and Health Centre",
      "value": {
        "lat": 54.235627,
        "lon": -125.761262,
        "display_name": "Lakes District Hospital and Health Centre, Burns Lake, British Columbia"
      }
    },
    {
      "label": "Langley Memorial Hospital",
      "value": {
        "lat": 49.0953,
        "lon": -122.612079,
        "display_name": "Langley Memorial Hospital, Langley, British Columbia"
      }
    },
    {
      "label": "Lillooet District Hospital and Health Centre",
      "value": {
        "lat": 50.690014,
        "lon": -121.938791,
        "display_name": "Lillooet District Hospital and Health Centre, Lillooet, British Columbia"
      }
    },
    {
      "label": "Lions Gate Hospital",
      "value": {
        "lat": 49.321864,
        "lon": -123.06837,
        "display_name": "Lions Gate Hospital, North Vancouver, British Columbia"
      }
    },
    {
      "label": "Mackenzie and District Hospital and Health Centre",
      "value": {
        "lat": 55.337578,
        "lon": -123.100648,
        "display_name": "Mackenzie and District Hospital and Health Centre, Mackenzie, British Columbia"
      }
    },
    {
      "label": "Masset Hospital",
      "value": {
        "lat": 54.020449,
        "lon": -132.157076,
        "display_name": "Masset Hospital, Masset, British Columbia"
      }
    },
    {
      "label": "Mcbride and District Hospital",
      "value": {
        "lat": 53.30164,
        "lon": -120.160828,
        "display_name": "Mcbride and District Hospital, Mcbride, British Columbia"
      }
    },
    {
      "label": "Mills Memorial Hospital",
      "value": {
        "lat": 54.510203,
        "lon": -128.596541,
        "display_name": "Mills Memorial Hospital, Terrace, British Columbia"
      }
    },
    {
      "label": "Mission Memorial Hospital",
      "value": {
        "lat": 49.135117,
        "lon": -122.332687,
        "display_name": "Mission Memorial Hospital, Mission, British Columbia"
      }
    },
    {
      "label": "Nanaimo Regional General Hospital",
      "value": {
        "lat": 49.184998,
        "lon": -123.969295,
        "display_name": "Nanaimo Regional General Hospital, Nanaimo, British Columbia"
      }
    },
    {
      "label": "Nicola Valley Health Centre",
      "value": {
        "lat": 50.121172,
        "lon": -120.772629,
        "display_name": "Nicola Valley Health Centre, Merritt, British Columbia"
      }
    },
    {
      "label": "North Island Hospital Comox Valley",
      "value": {
        "lat": 49.713417,
        "lon": -124.970384,
        "display_name": "North Island Hospital Comox Valley, Courtenay, British Columbia"
      }
    },
    {
      "label": "Northern Haida Gwaii Hospital and Health Centre (North End)",
      "value": {
        "lat": 54.020576,
        "lon": -132.157074,
        "display_name": "Northern Haida Gwaii Hospital and Health Centre (North End), Masset, British Columbia"
      }
    },
    {
      "label": "Peace Arch Hospital",
      "value": {
        "lat": 49.029968,
        "lon": -122.792231,
        "display_name": "Peace Arch Hospital, White Rock, British Columbia"
      }
    },
    {
      "label": "Penticton Regional Hospital",
      "value": {
        "lat": 49.481218,
        "lon": -119.577927,
        "display_name": "Penticton Regional Hospital, Penticton, British Columbia"
      }
    },
    {
      "label": "Port Alice Health Centre",
      "value": {
        "lat": 50.426009,
        "lon": -127.487835,
        "display_name": "Port Alice Health Centre, Port Alice, British Columbia"
      }
    },
    {
      "label": "Port Hardy Hospital",
      "value": {
        "lat": 50.720012,
        "lon": -127.502909,
        "display_name": "Port Hardy Hospital, Port Hardy, British Columbia"
      }
    },
    {
      "label": "Port Mcneill and District Hospital",
      "value": {
        "lat": 50.580646,
        "lon": -127.067858,
        "display_name": "Port Mcneill and District Hospital, Port Mcneill, British Columbia"
      }
    },
    {
      "label": "Powell River General Hospital",
      "value": {
        "lat": 49.850826,
        "lon": -124.518391,
        "display_name": "Powell River General Hospital, Powell River, British Columbia"
      }
    },
    {
      "label": "Prince George Regional Hospital",
      "value": {
        "lat": 53.911383,
        "lon": -122.764476,
        "display_name": "Prince George Regional Hospital, Prince George, British Columbia"
      }
    },
    {
      "label": "Prince Rupert Regional Hospital",
      "value": {
        "lat": 54.304446,
        "lon": -130.331503,
        "display_name": "Prince Rupert Regional Hospital, Prince Rupert, British Columbia"
      }
    },
    {
      "label": "Princeton General Hospital",
      "value": {
        "lat": 49.454095,
        "lon": -120.526738,
        "display_name": "Princeton General Hospital, Princeton, British Columbia"
      }
    },
    {
      "label": "St. Paul's Hospital",
      "value": {
        "lat": 49.280516,
        "lon": -123.128187,
        "display_name": "St. Paul's Hospital, Vancouver, British Columbia"
      }
    },
    {
      "label": "Providence Health Care - Holy Family Hospital",
      "value": {
        "lat": 49.212701,
        "lon": -123.07308,
        "display_name": "Providence Health Care - Holy Family Hospital, Vancouver, British Columbia"
      }
    },
    {
      "label": "Providence Health Care - Mount Saint Joseph Hospital",
      "value": {
        "lat": 49.258002,
        "lon": -123.095299,
        "display_name": "Providence Health Care - Mount Saint Joseph Hospital, Vancouver, British Columbia"
      }
    },
    {
      "label": "Queen Alexandra Centre for Children's Health",
      "value": {
        "lat": 48.47151,
        "lon": -123.29954,
        "display_name": "Queen Alexandra Centre for Children's Health, Victoria, British Columbia"
      }
    },
    {
      "label": "Queen Charlotte Islands General Hospital",
      "value": {
        "lat": 53.254641,
        "lon": -132.072632,
        "display_name": "Queen Charlotte Islands General Hospital, Queen Charlotte, British Columbia"
      }
    },
    {
      "label": "Queen Victoria Hospital and Health Centre",
      "value": {
        "lat": 50.976802,
        "lon": -118.19014,
        "display_name": "Queen Victoria Hospital and Health Centre, Revelstoke, British Columbia"
      }
    },
    {
      "label": "r.w. Large Memorial Hospital",
      "value": {
        "lat": 52.161273,
        "lon": -128.143339,
        "display_name": "r.w. Large Memorial Hospital, Waglisla, British Columbia"
      }
    },
    {
      "label": "Richmond Hospital",
      "value": {
        "lat": 49.168971,
        "lon": -123.146577,
        "display_name": "Richmond Hospital, Richmond, British Columbia"
      }
    },
    {
      "label": "Ridge Meadows Hospital",
      "value": {
        "lat": 49.216189,
        "lon": -122.63008,
        "display_name": "Ridge Meadows Hospital, Maple Ridge, British Columbia"
      }
    },
    {
      "label": "Riverview Hospital",
      "value": {
        "lat": 49.250839,
        "lon": -122.806171,
        "display_name": "Riverview Hospital, Coquitlam, British Columbia"
      }
    },
    {
      "label": "Royal Columbian Hospital",
      "value": {
        "lat": 49.226414,
        "lon": -122.891637,
        "display_name": "Royal Columbian Hospital, New Westminster, British Columbia"
      }
    },
    {
      "label": "Royal Inland Hospital",
      "value": {
        "lat": 50.670195,
        "lon": -120.334592,
        "display_name": "Royal Inland Hospital, Kamloops, British Columbia"
      }
    },
    {
      "label": "Royal Jubilee Hospital",
      "value": {
        "lat": 48.432719,
        "lon": -123.327913,
        "display_name": "Royal Jubilee Hospital, Victoria, British Columbia"
      }
    },
    {
      "label": "Saanich Peninsula Hospital",
      "value": {
        "lat": 48.594472,
        "lon": -123.410595,
        "display_name": "Saanich Peninsula Hospital, Saanichton, British Columbia"
      }
    },
    {
      "label": "Shuswap Lake General Hospital",
      "value": {
        "lat": 50.704561,
        "lon": -119.274381,
        "display_name": "Shuswap Lake General Hospital, Salmon Arm, British Columbia"
      }
    },
    {
      "label": "South Okanagan General Hospital",
      "value": {
        "lat": 49.183682,
        "lon": -119.53957,
        "display_name": "South Okanagan General Hospital, Oliver, British Columbia"
      }
    },
    {
      "label": "Squamish General Hospital",
      "value": {
        "lat": 49.697911,
        "lon": -123.141176,
        "display_name": "Squamish General Hospital, Squamish, British Columbia"
      }
    },
    {
      "label": "St. John Hospital",
      "value": {
        "lat": 54.028533,
        "lon": -124.010723,
        "display_name": "St. John Hospital, Vanderhoof, British Columbia"
      }
    },
    {
      "label": "St. Joseph's General Hospital - Comox",
      "value": {
        "lat": 49.674464,
        "lon": -124.941568,
        "display_name": "St. Joseph's General Hospital - Comox, Comox, British Columbia"
      }
    },
    {
      "label": "St. Mary's Hospital / Sechelt-Shishalh Hospital",
      "value": {
        "lat": 49.474619,
        "lon": -123.749631,
        "display_name": "St. Mary's Hospital / Sechelt-Shishalh Hospital, Sechelt, British Columbia"
      }
    },
    {
      "label": "Stuart Lake Hospital",
      "value": {
        "lat": 54.441405,
        "lon": -124.242352,
        "display_name": "Stuart Lake Hospital, Fort St James, British Columbia"
      }
    },
    {
      "label": "Sunny Hill Health Centre for Children",
      "value": {
        "lat": 49.251974,
        "lon": -123.04825,
        "display_name": "Sunny Hill Health Centre for Children, Vancouver, British Columbia"
      }
    },
    {
      "label": "Surrey Memorial Hospital",
      "value": {
        "lat": 49.176595,
        "lon": -122.841774,
        "display_name": "Surrey Memorial Hospital, Surrey, British Columbia"
      }
    },
    {
      "label": "the Regional Treatment Centre (Pacific)",
      "value": {
        "lat": 49.031086,
        "lon": -122.300316,
        "display_name": "the Regional Treatment Centre (Pacific), Abbotsford, British Columbia"
      }
    },
    {
      "label": "Tofino General Hospital",
      "value": {
        "lat": 49.151404,
        "lon": -125.908799,
        "display_name": "Tofino General Hospital, Tofino, British Columbia"
      }
    },
    {
      "label": "Ubc Hospital",
      "value": {
        "lat": 49.263156,
        "lon": -123.246002,
        "display_name": "Ubc Hospital, Vancouver, British Columbia"
      }
    },
    {
      "label": "Vancouver General Hospital",
      "value": {
        "lat": 49.261616,
        "lon": -123.123911,
        "display_name": "Vancouver General Hospital, Vancouver, British Columbia"
      }
    },
    {
      "label": "Vancouver General Hospital - Gordon and Leslie Diamond Health Care Centre",
      "value": {
        "lat": 49.261187,
        "lon": -123.125655,
        "display_name": "Vancouver General Hospital - Gordon and Leslie Diamond Health Care Centre, Vancouver, British Columbia"
      }
    },
    {
      "label": "Vancouver General Hospital - Health Centre",
      "value": {
        "lat": 49.26052,
        "lon": -123.120849,
        "display_name": "Vancouver General Hospital - Health Centre, Vancouver, British Columbia"
      }
    },
    {
      "label": "Vernon Jubilee Hospital",
      "value": {
        "lat": 50.255646,
        "lon": -119.270432,
        "display_name": "Vernon Jubilee Hospital, Vernon, British Columbia"
      }
    },
    {
      "label": "Victoria General Hospital - Victoria",
      "value": {
        "lat": 48.466504,
        "lon": -123.433064,
        "display_name": "Victoria General Hospital - Victoria, Victoria, British Columbia"
      }
    },
    {
      "label": "West Coast General Hospital",
      "value": {
        "lat": 49.248738,
        "lon": -124.782044,
        "display_name": "West Coast General Hospital, Port Alberni, British Columbia"
      }
    },
    {
      "label": "Wrinch Memorial Hospital",
      "value": {
        "lat": 55.259576,
        "lon": -127.651258,
        "display_name": "Wrinch Memorial Hospital, Hazelton, British Columbia"
      }
    },
    {
      "label": "100 Mile District General Hospital",
      "value": {
        "lat": 51.637671,
        "lon": -121.293053,
        "display_name": "100 Mile District General Hospital, 100 Mile House, British Columbia"
      }
    },
    {
      "label": "Abbotsford Regional Hospital and Cancer Care",
      "value": {
        "lat": 49.041893,
        "lon": -122.295136,
        "display_name": "Abbotsford Regional Hospital and Cancer Care, Abbotsford, British Columbia"
      }
    },
    {
      "label": "Abbotsford Regional Hospital and Cancer Centre",
      "value": {
        "lat": 49.037872,
        "lon": -122.312854,
        "display_name": "Abbotsford Regional Hospital and Cancer Centre, Abbotsford, British Columbia"
      }
    },
    {
      "label": "Arrow Lakes Hospital",
      "value": {
        "lat": 50.238282,
        "lon": -117.795971,
        "display_name": "Arrow Lakes Hospital, Nakusp, British Columbia"
      }
    },
    {
      "label": "Ashcroft and District Hospital and Community Health Centre",
      "value": {
        "lat": 50.734772,
        "lon": -121.280163,
        "display_name": "Ashcroft and District Hospital and Community Health Centre, Ashcroft, British Columbia"
      }
    },
    {
      "label": "Bc Women's Hospital and Health Centre",
      "value": {
        "lat": 49.243637,
        "lon": -123.125393,
        "display_name": "Bc Women's Hospital and Health Centre, Vancouver, British Columbia"
      }
    },
    {
      "label": "Boundary Hospital",
      "value": {
        "lat": 49.02955,
        "lon": -118.468238,
        "display_name": "Boundary Hospital, Grand Forks, British Columbia"
      }
    },
    {
      "label": "British Columbia Children's Hospital",
      "value": {
        "lat": 49.244268,
        "lon": -123.125479,
        "display_name": "British Columbia Children's Hospital, Vancouver, British Columbia"
      }
    },
    {
      "label": "Bulkley Valley District Hospital",
      "value": {
        "lat": 54.785021,
        "lon": -127.163422,
        "display_name": "Bulkley Valley District Hospital, Smithers, British Columbia"
      }
    },
    {
      "label": "Burnaby Hospital",
      "value": {
        "lat": 49.249479,
        "lon": -123.015787,
        "display_name": "Burnaby Hospital, Burnaby, British Columbia"
      }
    },
    {
      "label": "Campbell River and District Regional Hospital",
      "value": {
        "lat": 50.009834,
        "lon": -125.242771,
        "display_name": "Campbell River and District Regional Hospital, Campbell River, British Columbia"
      }
    },
    {
      "label": "Cariboo Memorial Hospital and Health Centre",
      "value": {
        "lat": 52.13747,
        "lon": -122.143729,
        "display_name": "Cariboo Memorial Hospital and Health Centre, Williams Lake, British Columbia"
      }
    },
    {
      "label": "Chemainus Health Care Centre",
      "value": {
        "lat": 48.927226,
        "lon": -123.715913,
        "display_name": "Chemainus Health Care Centre, Chemainus, British Columbia"
      }
    },
    {
      "label": "Chetwynd General Hospital and Health Centre",
      "value": {
        "lat": 55.696217,
        "lon": -121.644705,
        "display_name": "Chetwynd General Hospital and Health Centre, Chetwynd, British Columbia"
      }
    },
    {
      "label": "Chilliwack General Hospital",
      "value": {
        "lat": 49.166993,
        "lon": -121.963068,
        "display_name": "Chilliwack General Hospital, Chilliwack, British Columbia"
      }
    },
    {
      "label": "Cormorant Island Health Centre",
      "value": {
        "lat": 50.594297,
        "lon": -126.942357,
        "display_name": "Cormorant Island Health Centre, Alert Bay, British Columbia"
      }
    },
    {
      "label": "Cowichan District Hospital",
      "value": {
        "lat": 48.785009,
        "lon": -123.723323,
        "display_name": "Cowichan District Hospital, Duncan, British Columbia"
      }
    },
    {
      "label": "Creston Valley Hospital",
      "value": {
        "lat": 49.098702,
        "lon": -116.50831,
        "display_name": "Creston Valley Hospital, Creston, British Columbia"
      }
    },
    {
      "label": "Dawson Creek and District Hospital",
      "value": {
        "lat": 55.749633,
        "lon": -120.23581,
        "display_name": "Dawson Creek and District Hospital, Dawson Creek, British Columbia"
      }
    },
    {
      "label": "Delta Hospital",
      "value": {
        "lat": 49.085677,
        "lon": -123.061884,
        "display_name": "Delta Hospital, Delta, British Columbia"
      }
    },
    {
      "label": "Dr. Helmcken Memorial Hospital and Health Centre",
      "value": {
        "lat": 51.645342,
        "lon": -120.018183,
        "display_name": "Dr. Helmcken Memorial Hospital and Health Centre, Clearwater, British Columbia"
      }
    },
    {
      "label": "Eagle Ridge Hospital",
      "value": {
        "lat": 49.285505,
        "lon": -122.82358,
        "display_name": "Eagle Ridge Hospital, Port Moody, British Columbia"
      }
    },
    {
      "label": "East Kootenay Regional Hospital",
      "value": {
        "lat": 49.512422,
        "lon": -115.749993,
        "display_name": "East Kootenay Regional Hospital, Cranbrook, British Columbia"
      }
    },
    {
      "label": "Elk Valley Hospital",
      "value": {
        "lat": 49.513692,
        "lon": -115.056032,
        "display_name": "Elk Valley Hospital, Fernie, British Columbia"
      }
    },
    {
      "label": "Forensic Psychiatric Hospital (Forensic Psychiatric Services Commission)",
      "value": {
        "lat": 49.263318,
        "lon": -123.111417,
        "display_name": "Forensic Psychiatric Hospital (Forensic Psychiatric Services Commission), Port Coquitlam, British Columbia"
      }
    },
    {
      "label": "Fort Nelson General Hospital",
      "value": {
        "lat": 58.808959,
        "lon": -122.70494,
        "display_name": "Fort Nelson General Hospital, Fort Nelson, British Columbia"
      }
    },
    {
      "label": "Fort St. John Hospital",
      "value": {
        "lat": 56.256138,
        "lon": -120.816339,
        "display_name": "Fort St. John Hospital, Fort St John, British Columbia"
      }
    },
    {
      "label": "Fraser Canyon Hospital",
      "value": {
        "lat": 49.376838,
        "lon": -121.424275,
        "display_name": "Fraser Canyon Hospital, Hope, British Columbia"
      }
    },
    {
      "label": "g.f. Strong Rehabilitation Centre",
      "value": {
        "lat": 49.246789,
        "lon": -123.125415,
        "display_name": "g.f. Strong Rehabilitation Centre, Vancouver, British Columbia"
      }
    },
    {
      "label": "g.r. Baker Memorial Hospital",
      "value": {
        "lat": 52.981408,
        "lon": -122.499556,
        "display_name": "g.r. Baker Memorial Hospital, Quesnel, British Columbia"
      }
    },
    {
      "label": "Glengarry Hospital",
      "value": {
        "lat": 48.415283,
        "lon": -123.331886,
        "display_name": "Glengarry Hospital, Victoria, British Columbia"
      }
    },
    {
      "label": "Golden and District General Hospital",
      "value": {
        "lat": 51.296483,
        "lon": -116.966602,
        "display_name": "Golden and District General Hospital, Golden, British Columbia"
      }
    },
    {
      "label": "Haida Gwaii Hospital and Health Centre (South End)",
      "value": {
        "lat": 53.254868,
        "lon": -132.070526,
        "display_name": "Haida Gwaii Hospital and Health Centre (South End), Queen Charlotte, British Columbia"
      }
    },
    {
      "label": "Invermere and District Hospital/Columbia Valley",
      "value": {
        "lat": 50.506754,
        "lon": -116.033412,
        "display_name": "Invermere and District Hospital/Columbia Valley, Invermere, British Columbia"
      }
    },
    {
      "label": "Jim Pattison Outpatient Care and Surgery Centre",
      "value": {
        "lat": 49.179456,
        "lon": -122.833248,
        "display_name": "Jim Pattison Outpatient Care and Surgery Centre, Surrey, British Columbia"
      }
    },
    {
      "label": "Kelowna General Hospital",
      "value": {
        "lat": 49.873593,
        "lon": -119.493866,
        "display_name": "Kelowna General Hospital, Kelowna, British Columbia"
      }
    }
  ],
  "Manitoba": [
    {
      "label": "Altona Community Memorial Health Centre",
      "value": {
        "lat": 49.107401,
        "lon": -97.550719,
        "display_name": "Altona Community Memorial Health Centre, Altona, Manitoba"
      }
    },
    {
      "label": "Arborg and Districts Health Centre",
      "value": {
        "lat": 50.905138,
        "lon": -97.226298,
        "display_name": "Arborg and Districts Health Centre, Arborg, Manitoba"
      }
    },
    {
      "label": "Baldur Health Centre",
      "value": {
        "lat": 49.384896,
        "lon": -99.240738,
        "display_name": "Baldur Health Centre, Baldur, Manitoba"
      }
    },
    {
      "label": "Beausejour District Hospital",
      "value": {
        "lat": 50.057876,
        "lon": -96.519999,
        "display_name": "Beausejour District Hospital, Beausejour, Manitoba"
      }
    },
    {
      "label": "Bethesda Hospital",
      "value": {
        "lat": 49.529589,
        "lon": -96.680068,
        "display_name": "Bethesda Hospital, Steinbach, Manitoba"
      }
    },
    {
      "label": "Birtle Health Centre",
      "value": {
        "lat": 50.425755,
        "lon": -101.04682,
        "display_name": "Birtle Health Centre, Birtle, Manitoba"
      }
    },
    {
      "label": "Boissevain Health Centre",
      "value": {
        "lat": 49.224217,
        "lon": -100.059664,
        "display_name": "Boissevain Health Centre, Boissevain, Manitoba"
      }
    },
    {
      "label": "Brandon Regional Health Centre",
      "value": {
        "lat": 49.840231,
        "lon": -99.936897,
        "display_name": "Brandon Regional Health Centre, Brandon, Manitoba"
      }
    },
    {
      "label": "Cancercare Manitoba- Mcdermot",
      "value": {
        "lat": 49.903061,
        "lon": -97.158321,
        "display_name": "Cancercare Manitoba- Mcdermot, Winnipeg, Manitoba"
      }
    },
    {
      "label": "Carberry Plain Health Centre",
      "value": {
        "lat": 49.871891,
        "lon": -99.356199,
        "display_name": "Carberry Plain Health Centre, Carberry, Manitoba"
      }
    },
    {
      "label": "Carman Memorial Hospital",
      "value": {
        "lat": 49.496954,
        "lon": -98.008551,
        "display_name": "Carman Memorial Hospital, Carman, Manitoba"
      }
    },
    {
      "label": "Davidson Memorial Health Centre",
      "value": {
        "lat": 49.09505,
        "lon": -99.3411,
        "display_name": "Davidson Memorial Health Centre, Cartwright, Manitoba"
      }
    },
    {
      "label": "Churchill Health Centre",
      "value": {
        "lat": 58.771605,
        "lon": -94.170255,
        "display_name": "Churchill Health Centre, Churchill, Manitoba"
      }
    },
    {
      "label": "Concordia Hospital",
      "value": {
        "lat": 49.913511,
        "lon": -97.06463,
        "display_name": "Concordia Hospital, Winnipeg, Manitoba"
      }
    },
    {
      "label": "Cormorant Health Care Centre",
      "value": {
        "lat": 54.224805,
        "lon": -100.601709,
        "display_name": "Cormorant Health Care Centre, Unknown City, Manitoba"
      }
    },
    {
      "label": "Dauphin Regional Health Centre",
      "value": {
        "lat": 51.147744,
        "lon": -100.060971,
        "display_name": "Dauphin Regional Health Centre, Dauphin, Manitoba"
      }
    },
    {
      "label": "Deloraine Health Centre",
      "value": {
        "lat": 49.191693,
        "lon": -100.498318,
        "display_name": "Deloraine Health Centre, Deloraine, Manitoba"
      }
    },
    {
      "label": "DE SALABERRY DISTRICT HEALTH CENTRE",
      "value": {
        "lat": 49.444981,
        "lon": -96.988244,
        "display_name": "DE SALABERRY DISTRICT HEALTH CENTRE, Saint Pierre-Jolys, Manitoba"
      }
    },
    {
      "label": "Dr. Evelyn Memorial Hospital",
      "value": {
        "lat": 50.130343,
        "lon": -97.335717,
        "display_name": "Dr. Evelyn Memorial Hospital, Stonewall, Manitoba"
      }
    },
    {
      "label": "Elizabeth m. Crowe Memorial Hospital",
      "value": {
        "lat": 50.866084,
        "lon": -98.106658,
        "display_name": "Elizabeth m. Crowe Memorial Hospital, Eriksdale, Manitoba"
      }
    },
    {
      "label": "Erickson Health Centre",
      "value": {
        "lat": 50.496341,
        "lon": -99.90902,
        "display_name": "Erickson Health Centre, Erickson, Manitoba"
      }
    },
    {
      "label": "Flin Flon General Hospital",
      "value": {
        "lat": 54.764384,
        "lon": -101.876622,
        "display_name": "Flin Flon General Hospital, Flin Flon, Manitoba"
      }
    },
    {
      "label": "Gillam Hospital Inc.",
      "value": {
        "lat": 56.346671,
        "lon": -94.708376,
        "display_name": "Gillam Hospital Inc., Gillam, Manitoba"
      }
    },
    {
      "label": "Glenboro Health District Hospital",
      "value": {
        "lat": 49.559843,
        "lon": -99.287091,
        "display_name": "Glenboro Health District Hospital, Glenboro, Manitoba"
      }
    },
    {
      "label": "Grace General Hospital",
      "value": {
        "lat": 49.882355,
        "lon": -97.276776,
        "display_name": "Grace General Hospital, Winnipeg, Manitoba"
      }
    },
    {
      "label": "Grandview District Hospital",
      "value": {
        "lat": 51.178923,
        "lon": -100.70023,
        "display_name": "Grandview District Hospital, Grandview, Manitoba"
      }
    },
    {
      "label": "Hamiota District Health Centre",
      "value": {
        "lat": 50.18213,
        "lon": -100.59,
        "display_name": "Hamiota District Health Centre, Hamiota, Manitoba"
      }
    },
    {
      "label": "Hartney Health Centre",
      "value": {
        "lat": 49.484746,
        "lon": -100.526726,
        "display_name": "Hartney Health Centre, Hartney, Manitoba"
      }
    },
    {
      "label": "Health Sciences Centre",
      "value": {
        "lat": 49.904682,
        "lon": -97.159448,
        "display_name": "Health Sciences Centre, Winnipeg, Manitoba"
      }
    },
    {
      "label": "H\u00d4PITAL STE-ANNE HOSPITAL",
      "value": {
        "lat": 49.667882,
        "lon": -96.647661,
        "display_name": "H\u00d4PITAL STE-ANNE HOSPITAL, Ste-Anne, Manitoba"
      }
    },
    {
      "label": "Johnson Memorial Hospital",
      "value": {
        "lat": 50.62792,
        "lon": -96.993988,
        "display_name": "Johnson Memorial Hospital, Gimli, Manitoba"
      }
    },
    {
      "label": "Lakeshore General Hospital - Ashern",
      "value": {
        "lat": 51.179856,
        "lon": -98.351933,
        "display_name": "Lakeshore General Hospital - Ashern, Ashern, Manitoba"
      }
    },
    {
      "label": "Leaf Rapids Health Care Centre",
      "value": {
        "lat": 56.463294,
        "lon": -100.011258,
        "display_name": "Leaf Rapids Health Care Centre, Leaf Rapids, Manitoba"
      }
    },
    {
      "label": "Lorne Memorial Hospital",
      "value": {
        "lat": 49.412453,
        "lon": -98.787451,
        "display_name": "Lorne Memorial Hospital, Swan Lake, Manitoba"
      }
    },
    {
      "label": "Lynn Lake Hospital",
      "value": {
        "lat": 56.856871,
        "lon": -101.044037,
        "display_name": "Lynn Lake Hospital, Lynn Lake, Manitoba"
      }
    },
    {
      "label": "Macgregor Health Centre",
      "value": {
        "lat": 49.962241,
        "lon": -98.775017,
        "display_name": "Macgregor Health Centre, Macgregor, Manitoba"
      }
    },
    {
      "label": "Manitoba Adolescent Treatment Centre, Inc. - Hospital Program",
      "value": {
        "lat": 49.90613,
        "lon": -97.163433,
        "display_name": "Manitoba Adolescent Treatment Centre, Inc. - Hospital Program, Winnipeg, Manitoba"
      }
    },
    {
      "label": "Mccreary/Alonsa Health Centre",
      "value": {
        "lat": 50.772448,
        "lon": -99.486386,
        "display_name": "Mccreary/Alonsa Health Centre, Mccreary, Manitoba"
      }
    },
    {
      "label": "Melita Health Centre",
      "value": {
        "lat": 49.270503,
        "lon": -100.996575,
        "display_name": "Melita Health Centre, Melita, Manitoba"
      }
    },
    {
      "label": "Minnedosa Health Centre",
      "value": {
        "lat": 50.241616,
        "lon": -99.839963,
        "display_name": "Minnedosa Health Centre, Minnedosa, Manitoba"
      }
    },
    {
      "label": "Misericordia Health Centre",
      "value": {
        "lat": 49.87895,
        "lon": -97.15939,
        "display_name": "Misericordia Health Centre, Winnipeg, Manitoba"
      }
    },
    {
      "label": "Morris General Hospital",
      "value": {
        "lat": 49.353297,
        "lon": -97.360693,
        "display_name": "Morris General Hospital, Morris, Manitoba"
      }
    },
    {
      "label": "Neepawa District Memorial Hospital",
      "value": {
        "lat": 50.234156,
        "lon": -99.46295,
        "display_name": "Neepawa District Memorial Hospital, Neepawa, Manitoba"
      }
    },
    {
      "label": "Norway House Indian Hospital",
      "value": {
        "lat": 53.983997,
        "lon": -97.832136,
        "display_name": "Norway House Indian Hospital, Norway House, Manitoba"
      }
    },
    {
      "label": "Notre Dame Health Centre",
      "value": {
        "lat": 49.532694,
        "lon": -98.562463,
        "display_name": "Notre Dame Health Centre, Notre-Dame-De-Lourdes, Manitoba"
      }
    },
    {
      "label": "Pembina Manitou Health Centre",
      "value": {
        "lat": 49.241727,
        "lon": -98.544099,
        "display_name": "Pembina Manitou Health Centre, Manitou, Manitoba"
      }
    },
    {
      "label": "Percy e. Moore Hospital",
      "value": {
        "lat": 51.21595,
        "lon": -97.574065,
        "display_name": "Percy e. Moore Hospital, Hodgson, Manitoba"
      }
    },
    {
      "label": "Pinawa Hospital",
      "value": {
        "lat": 50.15126,
        "lon": -95.8835,
        "display_name": "Pinawa Hospital, Pinawa, Manitoba"
      }
    },
    {
      "label": "Pine Falls Hospital",
      "value": {
        "lat": 50.56338,
        "lon": -96.2148,
        "display_name": "Pine Falls Hospital, Pine Falls, Manitoba"
      }
    },
    {
      "label": "Portage District General Hospital",
      "value": {
        "lat": 49.96723,
        "lon": -98.2815,
        "display_name": "Portage District General Hospital, Portage La Prairie, Manitoba"
      }
    },
    {
      "label": "Reston Community Health Centre",
      "value": {
        "lat": 49.561357,
        "lon": -101.099845,
        "display_name": "Reston Community Health Centre, N Reston, Manitoba"
      }
    },
    {
      "label": "Riverdale Health Centre",
      "value": {
        "lat": 50.03518,
        "lon": -100.242086,
        "display_name": "Riverdale Health Centre, Rivers, Manitoba"
      }
    },
    {
      "label": "Roblin & District Health Centre",
      "value": {
        "lat": 51.22703,
        "lon": -101.362762,
        "display_name": "Roblin & District Health Centre, Roblin, Manitoba"
      }
    },
    {
      "label": "Rock Lake Health District Hospital",
      "value": {
        "lat": 49.150147,
        "lon": -98.950977,
        "display_name": "Rock Lake Health District Hospital, Crystal City, Manitoba"
      }
    },
    {
      "label": "Rossburn Health Centre",
      "value": {
        "lat": 50.667059,
        "lon": -100.804569,
        "display_name": "Rossburn Health Centre, Rossburn, Manitoba"
      }
    },
    {
      "label": "Russell Health Centre",
      "value": {
        "lat": 50.773167,
        "lon": -101.277214,
        "display_name": "Russell Health Centre, Russell, Manitoba"
      }
    },
    {
      "label": "Selkirk & District General Hospital",
      "value": {
        "lat": 50.157497,
        "lon": -96.887714,
        "display_name": "Selkirk & District General Hospital, Selkirk, Manitoba"
      }
    },
    {
      "label": "Seven Oaks General Hospital",
      "value": {
        "lat": 49.955313,
        "lon": -97.146103,
        "display_name": "Seven Oaks General Hospital, Winnipeg, Manitoba"
      }
    },
    {
      "label": "Gladstone Health Centre",
      "value": {
        "lat": 50.225678,
        "lon": -98.943559,
        "display_name": "Gladstone Health Centre, Gladstone, Manitoba"
      }
    },
    {
      "label": "Shoal Lake-Strathclair Health Centre",
      "value": {
        "lat": 50.438675,
        "lon": -100.594663,
        "display_name": "Shoal Lake-Strathclair Health Centre, Shoal Lake, Manitoba"
      }
    },
    {
      "label": "Snow Lake Health Centre",
      "value": {
        "lat": 54.881037,
        "lon": -100.027829,
        "display_name": "Snow Lake Health Centre, Snow Lake, Manitoba"
      }
    },
    {
      "label": "Souris Health Centre",
      "value": {
        "lat": 49.614677,
        "lon": -100.249117,
        "display_name": "Souris Health Centre, Souris, Manitoba"
      }
    },
    {
      "label": "St. Anthony\u0092s General Hospital",
      "value": {
        "lat": 53.827585,
        "lon": -101.250896,
        "display_name": "St. Anthony\u0092s General Hospital, Unknown City, Manitoba"
      }
    },
    {
      "label": "St. Boniface General Hospital",
      "value": {
        "lat": 49.884337,
        "lon": -97.12484,
        "display_name": "St. Boniface General Hospital, Winnipeg, Manitoba"
      }
    },
    {
      "label": "St. Claude Health Centre",
      "value": {
        "lat": 49.653774,
        "lon": -98.344921,
        "display_name": "St. Claude Health Centre, St Claude, Manitoba"
      }
    },
    {
      "label": "Ste. Rose General Hospital",
      "value": {
        "lat": 52.099188,
        "lon": -101.271765,
        "display_name": "Ste. Rose General Hospital, Ste Rose Du Lac, Manitoba"
      }
    },
    {
      "label": "Stonewall and District Health Centre",
      "value": {
        "lat": 50.131652,
        "lon": -97.335247,
        "display_name": "Stonewall and District Health Centre, Stonewall, Manitoba"
      }
    },
    {
      "label": "Swan Valley Health Centre",
      "value": {
        "lat": 52.106406,
        "lon": -101.262285,
        "display_name": "Swan Valley Health Centre, Swan River, Manitoba"
      }
    },
    {
      "label": "Teulon/Hunter Memorial Hospital",
      "value": {
        "lat": 50.387348,
        "lon": -97.254851,
        "display_name": "Teulon/Hunter Memorial Hospital, Teulon, Manitoba"
      }
    },
    {
      "label": "the Pas Health Complex",
      "value": {
        "lat": 53.829393,
        "lon": -101.247878,
        "display_name": "the Pas Health Complex, The Pas, Manitoba"
      }
    },
    {
      "label": "Thompson General Hospital",
      "value": {
        "lat": 55.735294,
        "lon": -97.856618,
        "display_name": "Thompson General Hospital, S Thompson, Manitoba"
      }
    },
    {
      "label": "Tiger Hills Health Centre",
      "value": {
        "lat": 49.633472,
        "lon": -98.698192,
        "display_name": "Tiger Hills Health Centre, Treherne, Manitoba"
      }
    },
    {
      "label": "Tri-Lake Health Centre",
      "value": {
        "lat": 49.175966,
        "lon": -99.663411,
        "display_name": "Tri-Lake Health Centre, Killarney, Manitoba"
      }
    },
    {
      "label": "Victoria General Hospital - Winnipeg",
      "value": {
        "lat": 49.806755,
        "lon": -97.152739,
        "display_name": "Victoria General Hospital - Winnipeg, Winnipeg, Manitoba"
      }
    },
    {
      "label": "Virden Health Centre",
      "value": {
        "lat": 49.856421,
        "lon": -100.923777,
        "display_name": "Virden Health Centre, Virden, Manitoba"
      }
    },
    {
      "label": "Vita & District Health Centre",
      "value": {
        "lat": 49.136181,
        "lon": -96.564779,
        "display_name": "Vita & District Health Centre, Vita, Manitoba"
      }
    },
    {
      "label": "Wawanesa and District Memorial Health Centre",
      "value": {
        "lat": 49.595097,
        "lon": -99.69253,
        "display_name": "Wawanesa and District Memorial Health Centre, Wawanesa, Manitoba"
      }
    },
    {
      "label": "Western Surgery Centre",
      "value": {
        "lat": 49.843072,
        "lon": -97.199791,
        "display_name": "Western Surgery Centre, Winnipeg, Manitoba"
      }
    },
    {
      "label": "Winnipegosis and District Health Centre",
      "value": {
        "lat": 51.640253,
        "lon": -99.932233,
        "display_name": "Winnipegosis and District Health Centre, Winnipegosis, Manitoba"
      }
    }
  ],
  "New Brunswick": [
    {
      "label": "Campbellton Regional Hospital",
      "value": {
        "lat": 47.993057,
        "lon": -66.666574,
        "display_name": "Campbellton Regional Hospital, Campbellton, New Brunswick"
      }
    },
    {
      "label": "Centracare Saint John Inc.",
      "value": {
        "lat": 45.254307,
        "lon": -66.126897,
        "display_name": "Centracare Saint John Inc., Saint John, New Brunswick"
      }
    },
    {
      "label": "Centre Hospitalier Restigouche Inc.",
      "value": {
        "lat": 47.993057,
        "lon": -66.666574,
        "display_name": "Centre Hospitalier Restigouche Inc., Campbellton, New Brunswick"
      }
    },
    {
      "label": "Centre Hospitalier Universitaire Dr-Georges-l.-Dumont",
      "value": {
        "lat": 46.098025,
        "lon": -64.786214,
        "display_name": "Centre Hospitalier Universitaire Dr-Georges-l.-Dumont, Moncton, New Brunswick"
      }
    },
    {
      "label": "Charlotte County Hospital",
      "value": {
        "lat": 45.194486,
        "lon": -67.265822,
        "display_name": "Charlotte County Hospital, St Stephen, New Brunswick"
      }
    },
    {
      "label": "Dr. Everett Chalmers Regional Hospital",
      "value": {
        "lat": 45.93897,
        "lon": -66.654472,
        "display_name": "Dr. Everett Chalmers Regional Hospital, Fredericton, New Brunswick"
      }
    },
    {
      "label": "Grand Manan Hospital",
      "value": {
        "lat": 44.762202,
        "lon": -66.763835,
        "display_name": "Grand Manan Hospital, Grand Manan, New Brunswick"
      }
    },
    {
      "label": "Hotel Dieu of Saint-Joseph",
      "value": {
        "lat": 46.729003,
        "lon": -67.710327,
        "display_name": "Hotel Dieu of Saint-Joseph, Perth-Andover, New Brunswick"
      }
    },
    {
      "label": "H\u00d4PITAL DE L'ENFANT - J\u00c9SUS RHSJ",
      "value": {
        "lat": 47.79453,
        "lon": -64.938719,
        "display_name": "H\u00d4PITAL DE L'ENFANT - J\u00c9SUS RHSJ, Caraquet, New Brunswick"
      }
    },
    {
      "label": "H\u00d4PITAL DE TRACADIE-SHEILA",
      "value": {
        "lat": 47.512383,
        "lon": -64.90633,
        "display_name": "H\u00d4PITAL DE TRACADIE-SHEILA, Tracadie-Sheila, New Brunswick"
      }
    },
    {
      "label": "H\u00d4PITAL ET CENTRE DE SANT\u00c9 COMMUNAUTAIRE DE LAM\u00c8QUE",
      "value": {
        "lat": 47.791639,
        "lon": -64.653161,
        "display_name": "H\u00d4PITAL ET CENTRE DE SANT\u00c9 COMMUNAUTAIRE DE LAM\u00c8QUE, Lam\u00e8que, New Brunswick"
      }
    },
    {
      "label": "H\u00d4PITAL GENERAL DE GRAND-SAULT",
      "value": {
        "lat": 47.045298,
        "lon": -67.754333,
        "display_name": "H\u00d4PITAL GENERAL DE GRAND-SAULT, Grand Falls/Grand-Sault, New Brunswick"
      }
    },
    {
      "label": "H\u00d4PITAL R\u00c9GIONAL CHALEUR",
      "value": {
        "lat": 47.649288,
        "lon": -65.694674,
        "display_name": "H\u00d4PITAL R\u00c9GIONAL CHALEUR, Bathurst, New Brunswick"
      }
    },
    {
      "label": "H\u00d4PITAL R\u00c9GIONAL D'EDMUNDSTON",
      "value": {
        "lat": 47.375995,
        "lon": -68.31069,
        "display_name": "H\u00d4PITAL R\u00c9GIONAL D'EDMUNDSTON, Edmundston, New Brunswick"
      }
    },
    {
      "label": "H\u00d4PITAL STELLA-MARIS-DE-KENT",
      "value": {
        "lat": 46.558871,
        "lon": -64.782351,
        "display_name": "H\u00d4PITAL STELLA-MARIS-DE-KENT, Sainte-Anne-De-Kent, New Brunswick"
      }
    },
    {
      "label": "H\u00d4TEL-DIEU SAINT-JOSEPH DE SAINT-QUENTIN / H\u00d4TEL-DIEU SAINT-JOSEPH DE SAINT-QUENTIN",
      "value": {
        "lat": 47.497546,
        "lon": -67.393196,
        "display_name": "H\u00d4TEL-DIEU SAINT-JOSEPH DE SAINT-QUENTIN / H\u00d4TEL-DIEU SAINT-JOSEPH DE SAINT-QUENTIN, Saint-Quentin, New Brunswick"
      }
    },
    {
      "label": "Miramichi Regional Hospital",
      "value": {
        "lat": 47.002868,
        "lon": -65.541443,
        "display_name": "Miramichi Regional Hospital, Miramichi, New Brunswick"
      }
    },
    {
      "label": "Oromocto Public Hospital",
      "value": {
        "lat": 45.848636,
        "lon": -66.47318,
        "display_name": "Oromocto Public Hospital, Oromocto, New Brunswick"
      }
    },
    {
      "label": "Sackville Memorial Hospital",
      "value": {
        "lat": 45.891902,
        "lon": -64.372445,
        "display_name": "Sackville Memorial Hospital, Sackville, New Brunswick"
      }
    },
    {
      "label": "Saint John Regional Hospital",
      "value": {
        "lat": 45.302733,
        "lon": -66.08515,
        "display_name": "Saint John Regional Hospital, Saint John, New Brunswick"
      }
    },
    {
      "label": "ST. JOSEPH'S HOSPITAL / H\u00d4PITAL ST. JOSEPH",
      "value": {
        "lat": 45.279031,
        "lon": -66.057905,
        "display_name": "ST. JOSEPH'S HOSPITAL / H\u00d4PITAL ST. JOSEPH, Saint John, New Brunswick"
      }
    },
    {
      "label": "Sussex Health Centre",
      "value": {
        "lat": 45.726333,
        "lon": -65.490574,
        "display_name": "Sussex Health Centre, Sussex, New Brunswick"
      }
    },
    {
      "label": "the Moncton Hospital",
      "value": {
        "lat": 46.104977,
        "lon": -64.80615,
        "display_name": "the Moncton Hospital, Moncton, New Brunswick"
      }
    },
    {
      "label": "the Stan Cassidy Centre for Rehabilitation",
      "value": {
        "lat": 45.937431,
        "lon": -66.652938,
        "display_name": "the Stan Cassidy Centre for Rehabilitation, Fredericton, New Brunswick"
      }
    },
    {
      "label": "Tobique Valley Community Health Centre",
      "value": {
        "lat": 46.891019,
        "lon": -67.397851,
        "display_name": "Tobique Valley Community Health Centre, Plaster Rock, New Brunswick"
      }
    },
    {
      "label": "Upper River Valley Hospital",
      "value": {
        "lat": 46.283593,
        "lon": -67.571154,
        "display_name": "Upper River Valley Hospital, Waterville, New Brunswick"
      }
    },
    {
      "label": "Workers' Rehabilitation Centre",
      "value": {
        "lat": 45.297954,
        "lon": -66.193877,
        "display_name": "Workers' Rehabilitation Centre, Saint John, New Brunswick"
      }
    }
  ],
  "Newfoundland and Labrador": [
    {
      "label": "a.m. Guy Memorial Health Centre",
      "value": {
        "lat": 48.824015,
        "lon": -56.857397,
        "display_name": "a.m. Guy Memorial Health Centre, Buchans, Newfoundland and Labrador"
      }
    },
    {
      "label": "Baie Verte Peninsula Health Centre",
      "value": {
        "lat": 49.925666,
        "lon": -56.221936,
        "display_name": "Baie Verte Peninsula Health Centre, Baie Verte, Newfoundland and Labrador"
      }
    },
    {
      "label": "Bonavista Peninsula Health Centre",
      "value": {
        "lat": 48.646578,
        "lon": -53.108451,
        "display_name": "Bonavista Peninsula Health Centre, Bonavista, Newfoundland and Labrador"
      }
    },
    {
      "label": "Bonne Bay Health Centre",
      "value": {
        "lat": 49.470386,
        "lon": -58.126394,
        "display_name": "Bonne Bay Health Centre, Norris Point, Newfoundland and Labrador"
      }
    },
    {
      "label": "Brookfield/Bonnews Health Centre",
      "value": {
        "lat": 49.13469,
        "lon": -53.590632,
        "display_name": "Brookfield/Bonnews Health Centre, Badgers Quay, Newfoundland and Labrador"
      }
    },
    {
      "label": "Carbonear General Hospital",
      "value": {
        "lat": 47.725256,
        "lon": -53.226571,
        "display_name": "Carbonear General Hospital, Carbonear, Newfoundland and Labrador"
      }
    },
    {
      "label": "Central Newfoundland Regional Health Centre",
      "value": {
        "lat": 48.932557,
        "lon": -55.647952,
        "display_name": "Central Newfoundland Regional Health Centre, Grand Falls-Windsor, Newfoundland and Labrador"
      }
    },
    {
      "label": "Connaigre Peninsula Health Centre",
      "value": {
        "lat": 47.468051,
        "lon": -55.827481,
        "display_name": "Connaigre Peninsula Health Centre, Harbour Breton, Newfoundland and Labrador"
      }
    },
    {
      "label": "Dr. a. a. Wilkinson Memorial Health Centre",
      "value": {
        "lat": 48.076266,
        "lon": -52.999593,
        "display_name": "Dr. a. a. Wilkinson Memorial Health Centre, Old Perlican, Newfoundland and Labrador"
      }
    },
    {
      "label": "Dr. Charles l. Legrow Health Centre",
      "value": {
        "lat": 47.588959,
        "lon": -59.162949,
        "display_name": "Dr. Charles l. Legrow Health Centre, Port Aux Basques, Newfoundland and Labrador"
      }
    },
    {
      "label": "Dr. Charles s. Curtis Memorial Hospital",
      "value": {
        "lat": 51.362436,
        "lon": -55.586989,
        "display_name": "Dr. Charles s. Curtis Memorial Hospital, St Anthony, Newfoundland and Labrador"
      }
    },
    {
      "label": "Dr. g.b. Cross Memorial Hospital",
      "value": {
        "lat": 48.164993,
        "lon": -53.984403,
        "display_name": "Dr. g.b. Cross Memorial Hospital, Clarenville, Newfoundland and Labrador"
      }
    },
    {
      "label": "Dr. Walter Templeman Health Care Centre",
      "value": {
        "lat": 47.645878,
        "lon": -52.946948,
        "display_name": "Dr. Walter Templeman Health Care Centre, Bell Island, Newfoundland and Labrador"
      }
    },
    {
      "label": "Fogo Island Health Centre",
      "value": {
        "lat": 49.665569,
        "lon": -54.224591,
        "display_name": "Fogo Island Health Centre, Fogo, Newfoundland and Labrador"
      }
    },
    {
      "label": "Green Bay Health Centre",
      "value": {
        "lat": 49.505774,
        "lon": -56.053543,
        "display_name": "Green Bay Health Centre, Springdale, Newfoundland and Labrador"
      }
    },
    {
      "label": "Health Sciences Centre - General Hospital",
      "value": {
        "lat": 47.571807,
        "lon": -52.741878,
        "display_name": "Health Sciences Centre - General Hospital, St Johns, Newfoundland and Labrador"
      }
    },
    {
      "label": "James Paton Memorial Regional Health Centre",
      "value": {
        "lat": 48.95607,
        "lon": -54.628799,
        "display_name": "James Paton Memorial Regional Health Centre, Gander, Newfoundland and Labrador"
      }
    },
    {
      "label": "Janeway Children's Health and Rehabilitation Centre",
      "value": {
        "lat": 47.572666,
        "lon": -52.742467,
        "display_name": "Janeway Children's Health and Rehabilitation Centre, St Johns, Newfoundland and Labrador"
      }
    },
    {
      "label": "Labrador Health Centre",
      "value": {
        "lat": 53.296639,
        "lon": -60.341373,
        "display_name": "Labrador Health Centre, Happy Valley-Goose Bay, Newfoundland and Labrador"
      }
    },
    {
      "label": "Labrador South Health Centre",
      "value": {
        "lat": 51.473905,
        "lon": -56.960103,
        "display_name": "Labrador South Health Centre, Forteau, Newfoundland and Labrador"
      }
    },
    {
      "label": "Labrador-Grenfell Health",
      "value": {
        "lat": 52.948396,
        "lon": -66.91316,
        "display_name": "Labrador-Grenfell Health, Labrador City, Newfoundland and Labrador"
      }
    },
    {
      "label": "Notre Dame Bay Memorial Health Centre",
      "value": {
        "lat": 49.653287,
        "lon": -54.757129,
        "display_name": "Notre Dame Bay Memorial Health Centre, Twillingate, Newfoundland and Labrador"
      }
    },
    {
      "label": "Rufus Guinchard Health Care Centre",
      "value": {
        "lat": 50.649633,
        "lon": -57.305352,
        "display_name": "Rufus Guinchard Health Care Centre, Port Saunders, Newfoundland and Labrador"
      }
    },
    {
      "label": "Sir Thomas Roddick Hospital",
      "value": {
        "lat": 48.559658,
        "lon": -58.552607,
        "display_name": "Sir Thomas Roddick Hospital, Stephenville, Newfoundland and Labrador"
      }
    },
    {
      "label": "St. Clare's Mercy Hospital",
      "value": {
        "lat": 47.557926,
        "lon": -52.72165,
        "display_name": "St. Clare's Mercy Hospital, St Johns, Newfoundland and Labrador"
      }
    },
    {
      "label": "u.s. Memorial Health Centre",
      "value": {
        "lat": 46.930187,
        "lon": -55.39905,
        "display_name": "u.s. Memorial Health Centre, St Lawrence, Newfoundland and Labrador"
      }
    },
    {
      "label": "Waterford Hospital",
      "value": {
        "lat": 47.529617,
        "lon": -52.742061,
        "display_name": "Waterford Hospital, St Johns, Newfoundland and Labrador"
      }
    },
    {
      "label": "Western Memorial Regional Hospital",
      "value": {
        "lat": 48.948502,
        "lon": -57.930591,
        "display_name": "Western Memorial Regional Hospital, Corner Brook, Newfoundland and Labrador"
      }
    },
    {
      "label": "White Bay Central Health Centre",
      "value": {
        "lat": 50.868696,
        "lon": -56.117025,
        "display_name": "White Bay Central Health Centre, Roddickton, Newfoundland and Labrador"
      }
    }
  ],
  "Nova Scotia": [
    {
      "label": "Aberdeen Hospital - New Glasgow",
      "value": {
        "lat": 45.573042,
        "lon": -62.642895,
        "display_name": "Aberdeen Hospital - New Glasgow, New Glasgow, Nova Scotia"
      }
    },
    {
      "label": "All Saints Springhill Hospital",
      "value": {
        "lat": 45.65028,
        "lon": -64.0501,
        "display_name": "All Saints Springhill Hospital, Springhill, Nova Scotia"
      }
    },
    {
      "label": "Annapolis Community Health Centre",
      "value": {
        "lat": 44.736619,
        "lon": -65.501864,
        "display_name": "Annapolis Community Health Centre, Annapolis Royal, Nova Scotia"
      }
    },
    {
      "label": "Buchanan Memorial Community Health Centre",
      "value": {
        "lat": 46.81057,
        "lon": -60.334327,
        "display_name": "Buchanan Memorial Community Health Centre, Neils Harbour, Nova Scotia"
      }
    },
    {
      "label": "Cape Breton Regional Hospital",
      "value": {
        "lat": 46.113409,
        "lon": -60.174263,
        "display_name": "Cape Breton Regional Hospital, Sydney, Nova Scotia"
      }
    },
    {
      "label": "Cobequid Community Health Centre",
      "value": {
        "lat": 44.757207,
        "lon": -63.658994,
        "display_name": "Cobequid Community Health Centre, Sackville, Nova Scotia"
      }
    },
    {
      "label": "Colchester Regional Hospital",
      "value": {
        "lat": 45.357097,
        "lon": -63.292882,
        "display_name": "Colchester Regional Hospital, Truro, Nova Scotia"
      }
    },
    {
      "label": "Cumberland Regional Health Care Centre",
      "value": {
        "lat": 45.804109,
        "lon": -64.1969,
        "display_name": "Cumberland Regional Health Care Centre, Amherst, Nova Scotia"
      }
    },
    {
      "label": "Dartmouth General Hospital",
      "value": {
        "lat": 44.653987,
        "lon": -63.547621,
        "display_name": "Dartmouth General Hospital, Dartmouth, Nova Scotia"
      }
    },
    {
      "label": "Digby General Hospital",
      "value": {
        "lat": 44.616534,
        "lon": -65.761667,
        "display_name": "Digby General Hospital, Digby, Nova Scotia"
      }
    },
    {
      "label": "Eastern Memorial Hospital",
      "value": {
        "lat": 45.332964,
        "lon": -60.983813,
        "display_name": "Eastern Memorial Hospital, Canso, Nova Scotia"
      }
    },
    {
      "label": "Eastern Shore Memorial Hospital",
      "value": {
        "lat": 44.920899,
        "lon": -62.532983,
        "display_name": "Eastern Shore Memorial Hospital, Sheet Harbour, Nova Scotia"
      }
    },
    {
      "label": "Fishermen's Memorial Hospital",
      "value": {
        "lat": 44.382276,
        "lon": -64.326952,
        "display_name": "Fishermen's Memorial Hospital, Lunenburg, Nova Scotia"
      }
    },
    {
      "label": "Glace Bay Healthcare Facility",
      "value": {
        "lat": 46.183211,
        "lon": -59.938572,
        "display_name": "Glace Bay Healthcare Facility, Glace Bay, Nova Scotia"
      }
    },
    {
      "label": "Hants Community Hospital",
      "value": {
        "lat": 44.986514,
        "lon": -64.120414,
        "display_name": "Hants Community Hospital, Windsor, Nova Scotia"
      }
    },
    {
      "label": "Harbour View Hospital",
      "value": {
        "lat": 46.234744,
        "lon": -60.222207,
        "display_name": "Harbour View Hospital, Sydney Mines, Nova Scotia"
      }
    },
    {
      "label": "Inverness Consolidated Memorial Hospital",
      "value": {
        "lat": 46.226968,
        "lon": -61.304843,
        "display_name": "Inverness Consolidated Memorial Hospital, Inverness, Nova Scotia"
      }
    },
    {
      "label": "Iwk Health Centre",
      "value": {
        "lat": 44.637993,
        "lon": -63.583484,
        "display_name": "Iwk Health Centre, Halifax, Nova Scotia"
      }
    },
    {
      "label": "Lillian Fraser Memorial Hospital",
      "value": {
        "lat": 45.711524,
        "lon": -63.296239,
        "display_name": "Lillian Fraser Memorial Hospital, Tatamagouche, Nova Scotia"
      }
    },
    {
      "label": "Musquodoboit Valley Memorial Hospital",
      "value": {
        "lat": 45.040464,
        "lon": -63.140493,
        "display_name": "Musquodoboit Valley Memorial Hospital, Middle Musquodoboit, Nova Scotia"
      }
    },
    {
      "label": "New Waterford Consolidated Hospital",
      "value": {
        "lat": 46.240138,
        "lon": -60.085691,
        "display_name": "New Waterford Consolidated Hospital, New Waterford, Nova Scotia"
      }
    },
    {
      "label": "North Cumberland Memorial Hospital",
      "value": {
        "lat": 45.856298,
        "lon": -63.65887,
        "display_name": "North Cumberland Memorial Hospital, Pugwash, Nova Scotia"
      }
    },
    {
      "label": "Northside General Hospital",
      "value": {
        "lat": 46.218293,
        "lon": -60.235619,
        "display_name": "Northside General Hospital, North Sydney, Nova Scotia"
      }
    },
    {
      "label": "Nova Scotia Rehabilitation Centre",
      "value": {
        "lat": 44.639724,
        "lon": -63.582158,
        "display_name": "Nova Scotia Rehabilitation Centre, Halifax, Nova Scotia"
      }
    },
    {
      "label": "Qeii - Halifax Infirmary Site",
      "value": {
        "lat": 44.645784,
        "lon": -63.586389,
        "display_name": "Qeii - Halifax Infirmary Site, Halifax, Nova Scotia"
      }
    },
    {
      "label": "Qeii - Victoria General (Vg) Site",
      "value": {
        "lat": 44.638405,
        "lon": -63.580402,
        "display_name": "Qeii - Victoria General (Vg) Site, Halifax, Nova Scotia"
      }
    },
    {
      "label": "Queen Elizabeth Ii Health Sciences Centre",
      "value": {
        "lat": 44.638422,
        "lon": -63.581341,
        "display_name": "Queen Elizabeth Ii Health Sciences Centre, Halifax, Nova Scotia"
      }
    },
    {
      "label": "Queens General Hospital",
      "value": {
        "lat": 44.037653,
        "lon": -64.705594,
        "display_name": "Queens General Hospital, Liverpool, Nova Scotia"
      }
    },
    {
      "label": "Roseway Hospital",
      "value": {
        "lat": 43.749523,
        "lon": -65.310347,
        "display_name": "Roseway Hospital, Shelburne, Nova Scotia"
      }
    },
    {
      "label": "Sacred Heart Hospital",
      "value": {
        "lat": 46.623469,
        "lon": -61.015105,
        "display_name": "Sacred Heart Hospital, Cheticamp, Nova Scotia"
      }
    },
    {
      "label": "Soldiers Memorial Hospital",
      "value": {
        "lat": 44.882577,
        "lon": -65.156992,
        "display_name": "Soldiers Memorial Hospital, Middleton, Nova Scotia"
      }
    },
    {
      "label": "South Cumberland Community Care Centre",
      "value": {
        "lat": 45.409197,
        "lon": -64.325971,
        "display_name": "South Cumberland Community Care Centre, Parrsboro, Nova Scotia"
      }
    },
    {
      "label": "South Shore Regional Hospital",
      "value": {
        "lat": 44.383167,
        "lon": -64.510596,
        "display_name": "South Shore Regional Hospital, Bridgewater, Nova Scotia"
      }
    },
    {
      "label": "St. Martha's Regional Hospital",
      "value": {
        "lat": 45.627949,
        "lon": -61.980072,
        "display_name": "St. Martha's Regional Hospital, Antigonish, Nova Scotia"
      }
    },
    {
      "label": "St. Mary's Memorial Hospital",
      "value": {
        "lat": 45.147814,
        "lon": -61.98193,
        "display_name": "St. Mary's Memorial Hospital, Sherbrooke, Nova Scotia"
      }
    },
    {
      "label": "Strait Richmond Hospital",
      "value": {
        "lat": 45.617084,
        "lon": -61.222926,
        "display_name": "Strait Richmond Hospital, Cleveland, Nova Scotia"
      }
    },
    {
      "label": "Sutherland Harris Memorial Hospital",
      "value": {
        "lat": 45.67663,
        "lon": -62.727086,
        "display_name": "Sutherland Harris Memorial Hospital, Pictou, Nova Scotia"
      }
    },
    {
      "label": "the East Coast Forensic Hospital",
      "value": {
        "lat": 44.721343,
        "lon": -63.591634,
        "display_name": "the East Coast Forensic Hospital, Dartmouth, Nova Scotia"
      }
    },
    {
      "label": "the Nova Scotia Hospital",
      "value": {
        "lat": 44.651054,
        "lon": -63.549005,
        "display_name": "the Nova Scotia Hospital, Dartmouth, Nova Scotia"
      }
    },
    {
      "label": "Twin Oaks Memorial Hospital",
      "value": {
        "lat": 44.783235,
        "lon": -63.158434,
        "display_name": "Twin Oaks Memorial Hospital, Musquodoboit Harbour, Nova Scotia"
      }
    },
    {
      "label": "Valley Regional Hospital",
      "value": {
        "lat": 45.084053,
        "lon": -64.500591,
        "display_name": "Valley Regional Hospital, Kentville, Nova Scotia"
      }
    },
    {
      "label": "Victoria County Memorial Hospital",
      "value": {
        "lat": 46.100264,
        "lon": -60.756029,
        "display_name": "Victoria County Memorial Hospital, Baddeck, Nova Scotia"
      }
    },
    {
      "label": "Yarmouth Regional Hospital",
      "value": {
        "lat": 43.850647,
        "lon": -66.121765,
        "display_name": "Yarmouth Regional Hospital, Yarmouth, Nova Scotia"
      }
    }
  ],
  "Northwest Territories": [
    {
      "label": "Fort Smith Health Centre",
      "value": {
        "lat": 60.003556,
        "lon": -111.880212,
        "display_name": "Fort Smith Health Centre, Fort Smith, Northwest Territories"
      }
    },
    {
      "label": "h.h. Williams Memorial Hospital",
      "value": {
        "lat": 60.81655,
        "lon": -115.779057,
        "display_name": "h.h. Williams Memorial Hospital, Hay River, Northwest Territories"
      }
    },
    {
      "label": "Inuvik Regional Hospital",
      "value": {
        "lat": 68.35299,
        "lon": -133.694525,
        "display_name": "Inuvik Regional Hospital, Inuvik, Northwest Territories"
      }
    },
    {
      "label": "Stanton Territorial Hospital",
      "value": {
        "lat": 62.447684,
        "lon": -114.4045,
        "display_name": "Stanton Territorial Hospital, Yellowknife, Northwest Territories"
      }
    }
  ],
  "Nunavut": [
    {
      "label": "Cambridge Bay Health Centre (Kitikmeot Regional Health Centre)",
      "value": {
        "lat": 69.117411,
        "lon": -105.051707,
        "display_name": "Cambridge Bay Health Centre (Kitikmeot Regional Health Centre), Cambridge Bay, Nunavut"
      }
    },
    {
      "label": "Rankin Inlet Health Centre",
      "value": {
        "lat": 62.815036,
        "lon": -92.086775,
        "display_name": "Rankin Inlet Health Centre, Rankin Inlet, Nunavut"
      }
    },
    {
      "label": "Qikiqtani General Hospital",
      "value": {
        "lat": 63.749938,
        "lon": -68.509098,
        "display_name": "Qikiqtani General Hospital, Iqaluit, Nunavut"
      }
    }
  ],
  "Ontario": [
    {
      "label": "Alexandra Hospital",
      "value": {
        "lat": 43.032068,
        "lon": -80.875459,
        "display_name": "Alexandra Hospital, Ingersoll, Ontario"
      }
    },
    {
      "label": "Alexandra Marine and General Hospital",
      "value": {
        "lat": 43.750293,
        "lon": -81.70602,
        "display_name": "Alexandra Marine and General Hospital, Goderich, Ontario"
      }
    },
    {
      "label": "Alexandra Marine and General Hospital of Goderich",
      "value": {
        "lat": 43.735844,
        "lon": -81.698324,
        "display_name": "Alexandra Marine and General Hospital of Goderich, Goderich, Ontario"
      }
    },
    {
      "label": "Algoma Family Services",
      "value": {
        "lat": 46.521541,
        "lon": -84.317832,
        "display_name": "Algoma Family Services, Sault Ste Marie, Ontario"
      }
    },
    {
      "label": "Almonte General Hospital",
      "value": {
        "lat": 45.229134,
        "lon": -76.189495,
        "display_name": "Almonte General Hospital, Almonte, Ontario"
      }
    },
    {
      "label": "Anson General Hospital",
      "value": {
        "lat": 48.769027,
        "lon": -80.68604,
        "display_name": "Anson General Hospital, Iroquois Falls, Ontario"
      }
    },
    {
      "label": "Arnprior Regional Health \u0097 Arnprior & District Memorial Hospital",
      "value": {
        "lat": 45.441542,
        "lon": -76.35292,
        "display_name": "Arnprior Regional Health \u0097 Arnprior & District Memorial Hospital, Arnprior, Ontario"
      }
    },
    {
      "label": "Atikokan General Hospital",
      "value": {
        "lat": 48.754155,
        "lon": -91.597609,
        "display_name": "Atikokan General Hospital, Atikokan, Ontario"
      }
    },
    {
      "label": "Bingham Memorial Hospital",
      "value": {
        "lat": 48.539604,
        "lon": -80.469751,
        "display_name": "Bingham Memorial Hospital, Matheson, Ontario"
      }
    },
    {
      "label": "Blind River District Health Centre",
      "value": {
        "lat": 46.187363,
        "lon": -82.924063,
        "display_name": "Blind River District Health Centre, Blind River, Ontario"
      }
    },
    {
      "label": "Bluewater Health",
      "value": {
        "lat": 42.977366,
        "lon": -82.390548,
        "display_name": "Bluewater Health, Sarnia, Ontario"
      }
    },
    {
      "label": "Bluewater Health - Petrolia (Charlotte Eleanor Englehart Hospital)",
      "value": {
        "lat": 42.87826,
        "lon": -82.147367,
        "display_name": "Bluewater Health - Petrolia (Charlotte Eleanor Englehart Hospital), Petrolia, Ontario"
      }
    },
    {
      "label": "Brant Community Healthcare System - Brantford General Hospital Site",
      "value": {
        "lat": 43.152313,
        "lon": -80.276196,
        "display_name": "Brant Community Healthcare System - Brantford General Hospital Site, Brantford, Ontario"
      }
    },
    {
      "label": "BROCKVILLE GENERAL - ST. VINCENT DE PAUL",
      "value": {
        "lat": 44.592036,
        "lon": -75.683193,
        "display_name": "BROCKVILLE GENERAL - ST. VINCENT DE PAUL, Brockville, Ontario"
      }
    },
    {
      "label": "Brockville General Hospital",
      "value": {
        "lat": 44.597394,
        "lon": -75.681314,
        "display_name": "Brockville General Hospital, Brockville, Ontario"
      }
    },
    {
      "label": "Cambridge Memorial Hospital",
      "value": {
        "lat": 43.378517,
        "lon": -80.32855,
        "display_name": "Cambridge Memorial Hospital, Cambridge, Ontario"
      }
    },
    {
      "label": "Campbellford Memorial Hospital",
      "value": {
        "lat": 44.312404,
        "lon": -77.789848,
        "display_name": "Campbellford Memorial Hospital, Campbellford, Ontario"
      }
    },
    {
      "label": "Carleton Place and District Memorial Hospital",
      "value": {
        "lat": 45.140984,
        "lon": -76.136681,
        "display_name": "Carleton Place and District Memorial Hospital, Carleton Place, Ontario"
      }
    },
    {
      "label": "Casey House Hospice",
      "value": {
        "lat": 43.668867,
        "lon": -79.37892,
        "display_name": "Casey House Hospice, Toronto, Ontario"
      }
    },
    {
      "label": "Centre for Addiction and Mental Health",
      "value": {
        "lat": 43.643585,
        "lon": -79.418541,
        "display_name": "Centre for Addiction and Mental Health, Toronto, Ontario"
      }
    },
    {
      "label": "Centre for Addiction and Mental Health - Brentcliffe Rd. Site",
      "value": {
        "lat": 43.719576,
        "lon": -79.366224,
        "display_name": "Centre for Addiction and Mental Health - Brentcliffe Rd. Site, Toronto, Ontario"
      }
    },
    {
      "label": "Centre for Addiction and Mental Health - College St. Site",
      "value": {
        "lat": 43.658405,
        "lon": -79.398968,
        "display_name": "Centre for Addiction and Mental Health - College St. Site, Toronto, Ontario"
      }
    },
    {
      "label": "Centre for Addiction and Mental Health - Russell St. Site",
      "value": {
        "lat": 43.659779,
        "lon": -79.399431,
        "display_name": "Centre for Addiction and Mental Health - Russell St. Site, Toronto, Ontario"
      }
    },
    {
      "label": "Chatham-Kent Health Alliance",
      "value": {
        "lat": 42.405071,
        "lon": -82.193665,
        "display_name": "Chatham-Kent Health Alliance, Chatham, Ontario"
      }
    },
    {
      "label": "Chatham-Kent Health Alliance - Sydenham District Hospital Campus",
      "value": {
        "lat": 42.598468,
        "lon": -82.366871,
        "display_name": "Chatham-Kent Health Alliance - Sydenham District Hospital Campus, Wallaceburg, Ontario"
      }
    },
    {
      "label": "Child and Parent Resource Institute",
      "value": {
        "lat": 42.967311,
        "lon": -81.333706,
        "display_name": "Child and Parent Resource Institute, London, Ontario"
      }
    },
    {
      "label": "Children's Hospital of Eastern Ontario",
      "value": {
        "lat": 45.400767,
        "lon": -75.652152,
        "display_name": "Children's Hospital of Eastern Ontario, Ottawa, Ontario"
      }
    },
    {
      "label": "Collingwood General and Marine Hospital",
      "value": {
        "lat": 44.499502,
        "lon": -80.203407,
        "display_name": "Collingwood General and Marine Hospital, Collingwood, Ontario"
      }
    },
    {
      "label": "Cornwall Community Hospital - Mcconnell Ave.",
      "value": {
        "lat": 45.029921,
        "lon": -74.718312,
        "display_name": "Cornwall Community Hospital - Mcconnell Ave., Cornwall, Ontario"
      }
    },
    {
      "label": "Cosmetic Surgery Hospital",
      "value": {
        "lat": 43.783302,
        "lon": -79.578003,
        "display_name": "Cosmetic Surgery Hospital, Woodbridge, Ontario"
      }
    },
    {
      "label": "Credit Valley Hospital",
      "value": {
        "lat": 43.55935,
        "lon": -79.703246,
        "display_name": "Credit Valley Hospital, Mississauga, Ontario"
      }
    },
    {
      "label": "Deep River and District Hospital",
      "value": {
        "lat": 46.090867,
        "lon": -77.475004,
        "display_name": "Deep River and District Hospital, Deep River, Ontario"
      }
    },
    {
      "label": "Don Mills Surgical Unit",
      "value": {
        "lat": 43.723616,
        "lon": -79.336177,
        "display_name": "Don Mills Surgical Unit, North York, Ontario"
      }
    },
    {
      "label": "Dryden Regional Health Centre",
      "value": {
        "lat": 49.76956,
        "lon": -92.838641,
        "display_name": "Dryden Regional Health Centre, Dryden, Ontario"
      }
    },
    {
      "label": "Emo Health Centre",
      "value": {
        "lat": 48.631491,
        "lon": -93.842073,
        "display_name": "Emo Health Centre, Emo, Ontario"
      }
    },
    {
      "label": "Englehart and District Hospital Inc.",
      "value": {
        "lat": 47.823199,
        "lon": -79.879574,
        "display_name": "Englehart and District Hospital Inc., Englehart, Ontario"
      }
    },
    {
      "label": "Espanola General Hospital",
      "value": {
        "lat": 46.248452,
        "lon": -81.780832,
        "display_name": "Espanola General Hospital, Espanola, Ontario"
      }
    },
    {
      "label": "Four Counties Health Services Corporation",
      "value": {
        "lat": 42.683425,
        "lon": -81.789223,
        "display_name": "Four Counties Health Services Corporation, Newbury, Ontario"
      }
    },
    {
      "label": "Georgetown Hospital",
      "value": {
        "lat": 43.644797,
        "lon": -79.933322,
        "display_name": "Georgetown Hospital, Georgetown, Ontario"
      }
    },
    {
      "label": "Geraldton District Hospital",
      "value": {
        "lat": 49.722694,
        "lon": -86.954712,
        "display_name": "Geraldton District Hospital, Geraldton, Ontario"
      }
    },
    {
      "label": "Grand River Hospital",
      "value": {
        "lat": 43.455771,
        "lon": -80.51168,
        "display_name": "Grand River Hospital, Kitchener, Ontario"
      }
    },
    {
      "label": "Grey Bruce Health Services (Corporate Headquarters) - Owen Sound",
      "value": {
        "lat": 44.569716,
        "lon": -80.910861,
        "display_name": "Grey Bruce Health Services (Corporate Headquarters) - Owen Sound, Owen Sound, Ontario"
      }
    },
    {
      "label": "Grey Bruce Health Services - Lion's Head",
      "value": {
        "lat": 44.986018,
        "lon": -81.248939,
        "display_name": "Grey Bruce Health Services - Lion's Head, Lions Head, Ontario"
      }
    },
    {
      "label": "Grey Bruce Health Services - Markdale",
      "value": {
        "lat": 44.31817,
        "lon": -80.650172,
        "display_name": "Grey Bruce Health Services - Markdale, Markdale, Ontario"
      }
    },
    {
      "label": "Grey Bruce Health Services - Meaford",
      "value": {
        "lat": 44.605716,
        "lon": -80.599874,
        "display_name": "Grey Bruce Health Services - Meaford, Meaford, Ontario"
      }
    },
    {
      "label": "Grey Bruce Health Services - Southampton",
      "value": {
        "lat": 44.493384,
        "lon": -81.366066,
        "display_name": "Grey Bruce Health Services - Southampton, Southampton, Ontario"
      }
    },
    {
      "label": "Grey Bruce Health Services - Wiarton",
      "value": {
        "lat": 44.736996,
        "lon": -81.138661,
        "display_name": "Grey Bruce Health Services - Wiarton, Wiarton, Ontario"
      }
    },
    {
      "label": "Groves Memorial Community Hospital",
      "value": {
        "lat": 43.705326,
        "lon": -80.37306,
        "display_name": "Groves Memorial Community Hospital, Fergus, Ontario"
      }
    },
    {
      "label": "Guelph General Hospital",
      "value": {
        "lat": 43.556362,
        "lon": -80.253547,
        "display_name": "Guelph General Hospital, Guelph, Ontario"
      }
    },
    {
      "label": "Haldimand War Memorial Hospital",
      "value": {
        "lat": 42.904968,
        "lon": -79.624936,
        "display_name": "Haldimand War Memorial Hospital, Dunnville, Ontario"
      }
    },
    {
      "label": "Haliburton Highlands Health Services - Haliburton Hospital",
      "value": {
        "lat": 45.038233,
        "lon": -78.529416,
        "display_name": "Haliburton Highlands Health Services - Haliburton Hospital, Haliburton, Ontario"
      }
    },
    {
      "label": "Haliburton Highlands Health Services - Minden",
      "value": {
        "lat": 44.925007,
        "lon": -78.731683,
        "display_name": "Haliburton Highlands Health Services - Minden, Minden, Ontario"
      }
    },
    {
      "label": "Halton Healthcare Services - Oakville",
      "value": {
        "lat": 43.448926,
        "lon": -79.766597,
        "display_name": "Halton Healthcare Services - Oakville, Oakville, Ontario"
      }
    },
    {
      "label": "Halton Healthcare Services Corporation - Milton Site",
      "value": {
        "lat": 43.497184,
        "lon": -79.868466,
        "display_name": "Halton Healthcare Services Corporation - Milton Site, Milton, Ontario"
      }
    },
    {
      "label": "Hamilton Health Sciences - Mcmaster",
      "value": {
        "lat": 43.253,
        "lon": -79.860524,
        "display_name": "Hamilton Health Sciences - Mcmaster, Hamilton, Ontario"
      }
    },
    {
      "label": "Hamilton Health Sciences - Hamilton General Hospital",
      "value": {
        "lat": 43.261753,
        "lon": -79.854324,
        "display_name": "Hamilton Health Sciences - Hamilton General Hospital, Hamilton, Ontario"
      }
    },
    {
      "label": "Hamilton Health Sciences - Juravinski Hospital",
      "value": {
        "lat": 43.239945,
        "lon": -79.846403,
        "display_name": "Hamilton Health Sciences - Juravinski Hospital, Hamilton, Ontario"
      }
    },
    {
      "label": "Hamilton Health Sciences - St. Peter's Hospital",
      "value": {
        "lat": 43.245145,
        "lon": -79.837122,
        "display_name": "Hamilton Health Sciences - St. Peter's Hospital, Hamilton, Ontario"
      }
    },
    {
      "label": "Hamilton Health Sciences - Ucc",
      "value": {
        "lat": 43.260119,
        "lon": -79.897683,
        "display_name": "Hamilton Health Sciences - Ucc, Hamilton, Ontario"
      }
    },
    {
      "label": "Hanover and District Hospital",
      "value": {
        "lat": 44.141468,
        "lon": -81.029334,
        "display_name": "Hanover and District Hospital, Hanover, Ontario"
      }
    },
    {
      "label": "Headwaters Health Care Centre - Headwaters Orangeville",
      "value": {
        "lat": 43.920509,
        "lon": -80.072243,
        "display_name": "Headwaters Health Care Centre - Headwaters Orangeville, Orangeville, Ontario"
      }
    },
    {
      "label": "Health Sciences North - Ramsey Lake Health Centre",
      "value": {
        "lat": 46.467935,
        "lon": -80.996284,
        "display_name": "Health Sciences North - Ramsey Lake Health Centre, Sudbury, Ontario"
      }
    },
    {
      "label": "North Bay Regional Health Centre - Kirkwood",
      "value": {
        "lat": 46.491834,
        "lon": -80.992178,
        "display_name": "North Bay Regional Health Centre - Kirkwood, Sudbury, Ontario"
      }
    },
    {
      "label": "Holland Bloorview Kids Rehabilitation Hospital",
      "value": {
        "lat": 43.718057,
        "lon": -79.37418,
        "display_name": "Holland Bloorview Kids Rehabilitation Hospital, Toronto, Ontario"
      }
    },
    {
      "label": "Homewood Health Centre",
      "value": {
        "lat": 43.557379,
        "lon": -80.25675,
        "display_name": "Homewood Health Centre, Guelph, Ontario"
      }
    },
    {
      "label": "Hornepayne Community Hospital",
      "value": {
        "lat": 49.212827,
        "lon": -84.774059,
        "display_name": "Hornepayne Community Hospital, Hornepayne, Ontario"
      }
    },
    {
      "label": "Hospital for Sick Children",
      "value": {
        "lat": 43.657374,
        "lon": -79.387437,
        "display_name": "Hospital for Sick Children, Toronto, Ontario"
      }
    },
    {
      "label": "Hotel Dieu Hospital - Religious Hospitallers of Saint Joseph of the Hotel Dieu of Kingston",
      "value": {
        "lat": 44.230909,
        "lon": -76.486032,
        "display_name": "Hotel Dieu Hospital - Religious Hospitallers of Saint Joseph of the Hotel Dieu of Kingston, Kingston, Ontario"
      }
    },
    {
      "label": "Hotel Dieu Hospital of Cornwall",
      "value": {
        "lat": 45.014927,
        "lon": -74.732434,
        "display_name": "Hotel Dieu Hospital of Cornwall, Cornwall, Ontario"
      }
    },
    {
      "label": "Hotel Dieu Shaver Health & Rehabilitation Centre",
      "value": {
        "lat": 43.122156,
        "lon": -79.242895,
        "display_name": "Hotel Dieu Shaver Health & Rehabilitation Centre, St Catharines, Ontario"
      }
    },
    {
      "label": "Humber River Hospital",
      "value": {
        "lat": 43.723772,
        "lon": -79.489374,
        "display_name": "Humber River Hospital, Toronto, Ontario"
      }
    },
    {
      "label": "Humber River Hospital -York Finch",
      "value": {
        "lat": 43.754503,
        "lon": -79.526393,
        "display_name": "Humber River Hospital -York Finch, Toronto, Ontario"
      }
    },
    {
      "label": "Humber River Regional Hospital - Church St. Site",
      "value": {
        "lat": 43.708656,
        "lon": -79.509922,
        "display_name": "Humber River Regional Hospital - Church St. Site, Weston, Ontario"
      }
    },
    {
      "label": "Humber River Regional Hospital - Keele Street Site",
      "value": {
        "lat": 43.697465,
        "lon": -79.473851,
        "display_name": "Humber River Regional Hospital - Keele Street Site, Toronto, Ontario"
      }
    },
    {
      "label": "Stratford General Hospital",
      "value": {
        "lat": 43.368168,
        "lon": -80.995481,
        "display_name": "Stratford General Hospital, Stratford, Ontario"
      }
    },
    {
      "label": "Huron Perth Healthcare Alliance - Clinton Public Hospital",
      "value": {
        "lat": 43.621847,
        "lon": -81.542234,
        "display_name": "Huron Perth Healthcare Alliance - Clinton Public Hospital, Clinton, Ontario"
      }
    },
    {
      "label": "Huron Perth Healthcare Alliance - Seaforth Community Hospital",
      "value": {
        "lat": 43.551147,
        "lon": -81.385122,
        "display_name": "Huron Perth Healthcare Alliance - Seaforth Community Hospital, Seaforth, Ontario"
      }
    },
    {
      "label": "Huron Perth Healthcare Alliance - St. Marys Memorial Hospital",
      "value": {
        "lat": 43.258999,
        "lon": -81.151898,
        "display_name": "Huron Perth Healthcare Alliance - St. Marys Memorial Hospital, St Marys, Ontario"
      }
    },
    {
      "label": "Huronia District Hospital",
      "value": {
        "lat": 44.742184,
        "lon": -79.913566,
        "display_name": "Huronia District Hospital, Midland, Ontario"
      }
    },
    {
      "label": "H\u00d4PITAL GENERAL DE HAWKESBURY AND DISTRICT GENERAL HOSPITAL INC.",
      "value": {
        "lat": 45.599498,
        "lon": -74.607557,
        "display_name": "H\u00d4PITAL GENERAL DE HAWKESBURY AND DISTRICT GENERAL HOSPITAL INC., Hawkesbury, Ontario"
      }
    },
    {
      "label": "H\u00d4PITAL GLENGARRY MEMORIAL HOSPITAL",
      "value": {
        "lat": 45.305873,
        "lon": -74.644064,
        "display_name": "H\u00d4PITAL GLENGARRY MEMORIAL HOSPITAL, Alexandria, Ontario"
      }
    },
    {
      "label": "Casselman Satellite Centre",
      "value": {
        "lat": 45.312562,
        "lon": -75.08611,
        "display_name": "Casselman Satellite Centre, Casselman, Ontario"
      }
    },
    {
      "label": "H\u00d4PITAL MONTFORT HOSPITAL",
      "value": {
        "lat": 45.445981,
        "lon": -75.639238,
        "display_name": "H\u00d4PITAL MONTFORT HOSPITAL, Ottawa, Ontario"
      }
    },
    {
      "label": "H\u00d4PITAL \u00c9LISABETH BRUY\u00c8RE HOSPITAL",
      "value": {
        "lat": 45.431931,
        "lon": -75.697012,
        "display_name": "H\u00d4PITAL \u00c9LISABETH BRUY\u00c8RE HOSPITAL, Ottawa, Ontario"
      }
    },
    {
      "label": "Windsor Regional Hospital - Ouellette Campus",
      "value": {
        "lat": 42.308636,
        "lon": -83.031988,
        "display_name": "Windsor Regional Hospital - Ouellette Campus, Windsor, Ontario"
      }
    },
    {
      "label": "James Bay General Hospital - Attawapiskat",
      "value": {
        "lat": 52.922733,
        "lon": -82.426001,
        "display_name": "James Bay General Hospital - Attawapiskat, Attawapiskat, Ontario"
      }
    },
    {
      "label": "James Bay General Hospital - Fort Albany",
      "value": {
        "lat": 52.20669,
        "lon": -81.6849,
        "display_name": "James Bay General Hospital - Fort Albany, Fort Albany, Ontario"
      }
    },
    {
      "label": "Joseph Brant Memorial Hospital",
      "value": {
        "lat": 43.31715,
        "lon": -79.80262,
        "display_name": "Joseph Brant Memorial Hospital, Burlington, Ontario"
      }
    },
    {
      "label": "Kashechewan First Nation",
      "value": {
        "lat": 51.290007,
        "lon": -80.615811,
        "display_name": "Kashechewan First Nation, Kashechewan, Ontario"
      }
    },
    {
      "label": "Kemptville District Hospital",
      "value": {
        "lat": 45.009918,
        "lon": -75.641348,
        "display_name": "Kemptville District Hospital, Kemptville, Ontario"
      }
    },
    {
      "label": "Kingston General Hospital",
      "value": {
        "lat": 44.224284,
        "lon": -76.492789,
        "display_name": "Kingston General Hospital, Kingston, Ontario"
      }
    },
    {
      "label": "Kirkland and District Hospital",
      "value": {
        "lat": 48.15345,
        "lon": -80.0147,
        "display_name": "Kirkland and District Hospital, Kirkland Lake, Ontario"
      }
    },
    {
      "label": "Lady Dunn Health Centre",
      "value": {
        "lat": 48.000868,
        "lon": -84.772074,
        "display_name": "Lady Dunn Health Centre, Wawa, Ontario"
      }
    },
    {
      "label": "Lady Minto Hospital",
      "value": {
        "lat": 49.070779,
        "lon": -81.021531,
        "display_name": "Lady Minto Hospital, Cochrane, Ontario"
      }
    },
    {
      "label": "Lake of the Woods District Hospital",
      "value": {
        "lat": 49.76711,
        "lon": -94.499411,
        "display_name": "Lake of the Woods District Hospital, Kenora, Ontario"
      }
    },
    {
      "label": "Lakeridge Health - Bowmanville",
      "value": {
        "lat": 43.909145,
        "lon": -78.679135,
        "display_name": "Lakeridge Health - Bowmanville, Bowmanville, Ontario"
      }
    },
    {
      "label": "Lakeridge Health - Oshawa",
      "value": {
        "lat": 43.905564,
        "lon": -78.869384,
        "display_name": "Lakeridge Health - Oshawa, Oshawa, Ontario"
      }
    },
    {
      "label": "Lakeridge Health - Port Perry",
      "value": {
        "lat": 44.104888,
        "lon": -78.954839,
        "display_name": "Lakeridge Health - Port Perry, Port Perry, Ontario"
      }
    },
    {
      "label": "Lakeridge Health - Whitby",
      "value": {
        "lat": 43.856003,
        "lon": -78.944334,
        "display_name": "Lakeridge Health - Whitby, Whitby, Ontario"
      }
    },
    {
      "label": "Lakeridge Health Ajax Pickering Hospital",
      "value": {
        "lat": 43.838028,
        "lon": -79.0177,
        "display_name": "Lakeridge Health Ajax Pickering Hospital, Ajax, Ontario"
      }
    },
    {
      "label": "Laverendrye General Hospital",
      "value": {
        "lat": 48.606011,
        "lon": -93.392543,
        "display_name": "Laverendrye General Hospital, Fort Frances, Ontario"
      }
    },
    {
      "label": "Leamington District Memorial Hospital",
      "value": {
        "lat": 42.048309,
        "lon": -82.614776,
        "display_name": "Leamington District Memorial Hospital, Leamington, Ontario"
      }
    },
    {
      "label": "Lennox and Addington County General Hospital",
      "value": {
        "lat": 44.240025,
        "lon": -76.967029,
        "display_name": "Lennox and Addington County General Hospital, Napanee, Ontario"
      }
    },
    {
      "label": "Listowel Wingham Hospitals Alliance - Listowel Memorial Hospital",
      "value": {
        "lat": 43.73336,
        "lon": -80.948941,
        "display_name": "Listowel Wingham Hospitals Alliance - Listowel Memorial Hospital, Listowel, Ontario"
      }
    },
    {
      "label": "Listowel Wingham Hospitals Alliance - Wingham and District Hospital",
      "value": {
        "lat": 43.8848,
        "lon": -81.306698,
        "display_name": "Listowel Wingham Hospitals Alliance - Wingham and District Hospital, Wingham, Ontario"
      }
    },
    {
      "label": "London Health Sciences Centre - Victoria",
      "value": {
        "lat": 42.960029,
        "lon": -81.22543,
        "display_name": "London Health Sciences Centre - Victoria, London, Ontario"
      }
    },
    {
      "label": "London Health Sciences Centre - South Street Site",
      "value": {
        "lat": 42.98681,
        "lon": -81.251126,
        "display_name": "London Health Sciences Centre - South Street Site, London, Ontario"
      }
    },
    {
      "label": "London Health Sciences Centre - University Campus",
      "value": {
        "lat": 43.012453,
        "lon": -81.274542,
        "display_name": "London Health Sciences Centre - University Campus, London, Ontario"
      }
    },
    {
      "label": "Mackenzie Richmond Hill Hospital",
      "value": {
        "lat": 43.870548,
        "lon": -79.450386,
        "display_name": "Mackenzie Richmond Hill Hospital, Richmond Hill, Ontario"
      }
    },
    {
      "label": "Manitoulin Health Centre - Little Current Site",
      "value": {
        "lat": 45.978547,
        "lon": -81.92662,
        "display_name": "Manitoulin Health Centre - Little Current Site, Little Current, Ontario"
      }
    },
    {
      "label": "Manitoulin Health Centre - Mindemoya",
      "value": {
        "lat": 45.737954,
        "lon": -82.16749,
        "display_name": "Manitoulin Health Centre - Mindemoya, Mindemoya, Ontario"
      }
    },
    {
      "label": "Manitouwadge General Hospital",
      "value": {
        "lat": 49.127201,
        "lon": -85.824226,
        "display_name": "Manitouwadge General Hospital, Manitouwadge, Ontario"
      }
    },
    {
      "label": "Markham Stouffville Hospital",
      "value": {
        "lat": 43.883994,
        "lon": -79.231971,
        "display_name": "Markham Stouffville Hospital, Markham, Ontario"
      }
    },
    {
      "label": "Markham Stouffville Hospital - Uxbridge Site",
      "value": {
        "lat": 44.102915,
        "lon": -79.127405,
        "display_name": "Markham Stouffville Hospital - Uxbridge Site, Uxbridge, Ontario"
      }
    },
    {
      "label": "Mattawa General Hospital Inc.",
      "value": {
        "lat": 48.539433,
        "lon": -80.469727,
        "display_name": "Mattawa General Hospital Inc., Mattawa, Ontario"
      }
    },
    {
      "label": "Mount Sinai Hospital",
      "value": {
        "lat": 43.65751,
        "lon": -79.390294,
        "display_name": "Mount Sinai Hospital, Toronto, Ontario"
      }
    },
    {
      "label": "Muskoka Algonquin Healthcare - Huntsville District Memorial Hospital Site",
      "value": {
        "lat": 45.047582,
        "lon": -79.314327,
        "display_name": "Muskoka Algonquin Healthcare - Huntsville District Memorial Hospital Site, Huntsville, Ontario"
      }
    },
    {
      "label": "Niagara Health System - Douglas Memorial Hospital",
      "value": {
        "lat": 42.912453,
        "lon": -78.924119,
        "display_name": "Niagara Health System - Douglas Memorial Hospital, Fort Erie, Ontario"
      }
    },
    {
      "label": "Niagara Health System - Greater Niagara General Site",
      "value": {
        "lat": 43.094227,
        "lon": -79.089464,
        "display_name": "Niagara Health System - Greater Niagara General Site, Niagara Falls, Ontario"
      }
    },
    {
      "label": "Niagara Health System - Niagara-on-the-Lake Hospital Site",
      "value": {
        "lat": 43.253223,
        "lon": -79.066117,
        "display_name": "Niagara Health System - Niagara-on-the-Lake Hospital Site, Niagara-On-The-Lake, Ontario"
      }
    },
    {
      "label": "Niagara Health System - Port Colborne General Site",
      "value": {
        "lat": 42.879704,
        "lon": -79.258696,
        "display_name": "Niagara Health System - Port Colborne General Site, Port Colborne, Ontario"
      }
    },
    {
      "label": "Niagara Health System - St. Catharines",
      "value": {
        "lat": 43.153522,
        "lon": -79.278683,
        "display_name": "Niagara Health System - St. Catharines, St Catharines, Ontario"
      }
    },
    {
      "label": "Niagara Health System - St. Catharines General Site",
      "value": {
        "lat": 43.153663,
        "lon": -79.2785,
        "display_name": "Niagara Health System - St. Catharines General Site, St Catharines, Ontario"
      }
    },
    {
      "label": "Nipigon District Memorial Hospital",
      "value": {
        "lat": 49.015575,
        "lon": -88.275905,
        "display_name": "Nipigon District Memorial Hospital, Nipigon, Ontario"
      }
    },
    {
      "label": "Norfolk General Hospital",
      "value": {
        "lat": 42.835418,
        "lon": -80.314531,
        "display_name": "Norfolk General Hospital, Simcoe, Ontario"
      }
    },
    {
      "label": "North Bay General Hospital - Mclaren Site",
      "value": {
        "lat": 46.3197,
        "lon": -79.466145,
        "display_name": "North Bay General Hospital - Mclaren Site, North Bay, Ontario"
      }
    },
    {
      "label": "North Bay Regional Health Centre",
      "value": {
        "lat": 46.335613,
        "lon": -79.498369,
        "display_name": "North Bay Regional Health Centre, North Bay, Ontario"
      }
    },
    {
      "label": "North of Superior Healthcare Group - Mccausland Hospital",
      "value": {
        "lat": 48.780454,
        "lon": -87.104601,
        "display_name": "North of Superior Healthcare Group - Mccausland Hospital, Terrace Bay, Ontario"
      }
    },
    {
      "label": "Matthews Memorial Hospital",
      "value": {
        "lat": 46.293266,
        "lon": -84.035562,
        "display_name": "Matthews Memorial Hospital, Richards Landing, Ontario"
      }
    },
    {
      "label": "North Wellington Health Care - Louise Marshall Hospital",
      "value": {
        "lat": 43.97462,
        "lon": -80.737517,
        "display_name": "North Wellington Health Care - Louise Marshall Hospital, Mount Forest, Ontario"
      }
    },
    {
      "label": "North York General Hospital - Branson Division",
      "value": {
        "lat": 43.772453,
        "lon": -79.448136,
        "display_name": "North York General Hospital - Branson Division, North York, Ontario"
      }
    },
    {
      "label": "North York General Hospital - General Division",
      "value": {
        "lat": 43.76955,
        "lon": -79.363206,
        "display_name": "North York General Hospital - General Division, North York, Ontario"
      }
    },
    {
      "label": "Northumberland Hills Hospital",
      "value": {
        "lat": 43.977748,
        "lon": -78.198437,
        "display_name": "Northumberland Hills Hospital, Cobourg, Ontario"
      }
    },
    {
      "label": "Notre-Dame Hospital - Hearst",
      "value": {
        "lat": 49.685734,
        "lon": -83.67905,
        "display_name": "Notre-Dame Hospital - Hearst, Hearst, Ontario"
      }
    },
    {
      "label": "Sunnybrook Health Sciences Centre - Bayview Campus",
      "value": {
        "lat": 43.720661,
        "lon": -79.378057,
        "display_name": "Sunnybrook Health Sciences Centre - Bayview Campus, Toronto, Ontario"
      }
    },
    {
      "label": "Ongwanada Hospital",
      "value": {
        "lat": 44.227675,
        "lon": -76.523867,
        "display_name": "Ongwanada Hospital, Kingston, Ontario"
      }
    },
    {
      "label": "Ontario Shores Centre for Mental Health Sciences",
      "value": {
        "lat": 43.849046,
        "lon": -78.947981,
        "display_name": "Ontario Shores Centre for Mental Health Sciences, Whitby, Ontario"
      }
    },
    {
      "label": "Orillia Soldiers' Memorial Hospital",
      "value": {
        "lat": 44.605089,
        "lon": -79.425605,
        "display_name": "Orillia Soldiers' Memorial Hospital, Orillia, Ontario"
      }
    },
    {
      "label": "Pembroke Regional Hospital",
      "value": {
        "lat": 45.814118,
        "lon": -77.106799,
        "display_name": "Pembroke Regional Hospital, Pembroke, Ontario"
      }
    },
    {
      "label": "Perth and Smiths Falls District Hospital",
      "value": {
        "lat": 44.906447,
        "lon": -76.139754,
        "display_name": "Perth and Smiths Falls District Hospital, Smiths Falls, Ontario"
      }
    },
    {
      "label": "Perth and Smiths Falls District Hospital - Perth",
      "value": {
        "lat": 44.906182,
        "lon": -76.253006,
        "display_name": "Perth and Smiths Falls District Hospital - Perth, Perth, Ontario"
      }
    },
    {
      "label": "Peterborough Regional Health Centre",
      "value": {
        "lat": 44.300241,
        "lon": -78.347341,
        "display_name": "Peterborough Regional Health Centre, Peterborough, Ontario"
      }
    },
    {
      "label": "Providence Care - Mental Health Services",
      "value": {
        "lat": 44.216009,
        "lon": -76.528656,
        "display_name": "Providence Care - Mental Health Services, Kingston, Ontario"
      }
    },
    {
      "label": "Queensway Carleton Hospital",
      "value": {
        "lat": 45.335027,
        "lon": -75.806984,
        "display_name": "Queensway Carleton Hospital, Ottawa, Ontario"
      }
    },
    {
      "label": "Quinte Health Care - North Hastings District Hospital",
      "value": {
        "lat": 45.055076,
        "lon": -77.864212,
        "display_name": "Quinte Health Care - North Hastings District Hospital, Bancroft, Ontario"
      }
    },
    {
      "label": "Belleville General Hospital",
      "value": {
        "lat": 44.162705,
        "lon": -77.364323,
        "display_name": "Belleville General Hospital, Belleville, Ontario"
      }
    },
    {
      "label": "Quinte Health Care - Prince Edward County Memorial Hospital",
      "value": {
        "lat": 44.015867,
        "lon": -77.137543,
        "display_name": "Quinte Health Care - Prince Edward County Memorial Hospital, Picton, Ontario"
      }
    },
    {
      "label": "Quinte Healthcare Corporation - Trenton Memorial Hospital",
      "value": {
        "lat": 44.099899,
        "lon": -77.588243,
        "display_name": "Quinte Healthcare Corporation - Trenton Memorial Hospital, Trenton, Ontario"
      }
    },
    {
      "label": "r. s. Mclaughlin Durham Regional Cancer Centre",
      "value": {
        "lat": 43.906608,
        "lon": -78.870345,
        "display_name": "r. s. Mclaughlin Durham Regional Cancer Centre, Oshawa, Ontario"
      }
    },
    {
      "label": "Red Lake Margaret Cochenour Memorial Hospital",
      "value": {
        "lat": 51.013262,
        "lon": -93.822435,
        "display_name": "Red Lake Margaret Cochenour Memorial Hospital, Red Lake, Ontario"
      }
    },
    {
      "label": "Regional Mental Health Care - London",
      "value": {
        "lat": 43.003942,
        "lon": -81.205239,
        "display_name": "Regional Mental Health Care - London, London, Ontario"
      }
    },
    {
      "label": "Renfrew Victoria Hospital",
      "value": {
        "lat": 45.482622,
        "lon": -76.696722,
        "display_name": "Renfrew Victoria Hospital, Renfrew, Ontario"
      }
    },
    {
      "label": "Ross Memorial Hospital",
      "value": {
        "lat": 44.353619,
        "lon": -78.752219,
        "display_name": "Ross Memorial Hospital, Kawartha Lakes, Ontario"
      }
    },
    {
      "label": "Scarborough Health Network - Centenary Hospital",
      "value": {
        "lat": 43.780759,
        "lon": -79.205023,
        "display_name": "Scarborough Health Network - Centenary Hospital, Toronto, Ontario"
      }
    },
    {
      "label": "Royal Ottawa Health Care Group - Brockville Mental Health Centre",
      "value": {
        "lat": 44.602034,
        "lon": -75.66444,
        "display_name": "Royal Ottawa Health Care Group - Brockville Mental Health Centre, Brockville, Ontario"
      }
    },
    {
      "label": "Royal Ottawa Mental Health Centre",
      "value": {
        "lat": 45.389006,
        "lon": -75.730156,
        "display_name": "Royal Ottawa Mental Health Centre, Ottawa, Ontario"
      }
    },
    {
      "label": "Sault Area Hospital",
      "value": {
        "lat": 46.548814,
        "lon": -84.311159,
        "display_name": "Sault Area Hospital, Sault Ste Marie, Ontario"
      }
    },
    {
      "label": "Sensenbrenner Hospital",
      "value": {
        "lat": 49.42561,
        "lon": -82.427581,
        "display_name": "Sensenbrenner Hospital, Kapuskasing, Ontario"
      }
    },
    {
      "label": "Shouldice Hospital Ltd.",
      "value": {
        "lat": 43.820698,
        "lon": -79.404238,
        "display_name": "Shouldice Hospital Ltd., Thornhill, Ontario"
      }
    },
    {
      "label": "Sioux Lookout Meno Ya Win Health Centre",
      "value": {
        "lat": 50.104509,
        "lon": -91.926837,
        "display_name": "Sioux Lookout Meno Ya Win Health Centre, Sioux Lookout, Ontario"
      }
    },
    {
      "label": "Sioux Lookout Meno-Ya-Win Health Centre - Seventh Avenue Site",
      "value": {
        "lat": 50.102455,
        "lon": -91.924188,
        "display_name": "Sioux Lookout Meno-Ya-Win Health Centre - Seventh Avenue Site, Sioux Lookout, Ontario"
      }
    },
    {
      "label": "Smooth Rock Falls Hospital",
      "value": {
        "lat": 49.272285,
        "lon": -81.610265,
        "display_name": "Smooth Rock Falls Hospital, Smooth Rock Falls, Ontario"
      }
    },
    {
      "label": "South Bruce Grey Health Centre - Walkerton",
      "value": {
        "lat": 44.122932,
        "lon": -81.15287,
        "display_name": "South Bruce Grey Health Centre - Walkerton, Walkerton, Ontario"
      }
    },
    {
      "label": "South Bruce Grey Health Centre - Chesley",
      "value": {
        "lat": 44.298492,
        "lon": -81.093232,
        "display_name": "South Bruce Grey Health Centre - Chesley, Chesley, Ontario"
      }
    },
    {
      "label": "South Bruce Grey Health Centre - Durham",
      "value": {
        "lat": 44.179866,
        "lon": -80.828585,
        "display_name": "South Bruce Grey Health Centre - Durham, Durham, Ontario"
      }
    },
    {
      "label": "South Bruce Grey Health Centre - Kincardine",
      "value": {
        "lat": 44.189024,
        "lon": -81.625475,
        "display_name": "South Bruce Grey Health Centre - Kincardine, Kincardine, Ontario"
      }
    },
    {
      "label": "South Huron Hospital",
      "value": {
        "lat": 43.343441,
        "lon": -81.480824,
        "display_name": "South Huron Hospital, Exeter, Ontario"
      }
    },
    {
      "label": "South Muskoka Memorial Hospital",
      "value": {
        "lat": 45.04781,
        "lon": -79.314359,
        "display_name": "South Muskoka Memorial Hospital, Bracebridge, Ontario"
      }
    },
    {
      "label": "Southlake Regional Health Centre",
      "value": {
        "lat": 44.060226,
        "lon": -79.452293,
        "display_name": "Southlake Regional Health Centre, Newmarket, Ontario"
      }
    },
    {
      "label": "St. Francis Memorial Hospital",
      "value": {
        "lat": 45.482208,
        "lon": -77.694697,
        "display_name": "St. Francis Memorial Hospital, Barrys Bay, Ontario"
      }
    },
    {
      "label": "St. John's Rehabilitation Hospital",
      "value": {
        "lat": 43.787545,
        "lon": -79.404057,
        "display_name": "St. John's Rehabilitation Hospital, Toronto, Ontario"
      }
    },
    {
      "label": "St. Joseph's Care Group - Lakehead Psychiatric Hospital",
      "value": {
        "lat": 48.438058,
        "lon": -89.222677,
        "display_name": "St. Joseph's Care Group - Lakehead Psychiatric Hospital, Thunder Bay, Ontario"
      }
    },
    {
      "label": "St. Joseph\u0092s Health Centre of Sudbury",
      "value": {
        "lat": 46.467199,
        "lon": -80.967601,
        "display_name": "St. Joseph\u0092s Health Centre of Sudbury, Sudbury, Ontario"
      }
    },
    {
      "label": "St. Joseph's General Hospital - Elliot Lake",
      "value": {
        "lat": 46.384833,
        "lon": -82.660924,
        "display_name": "St. Joseph's General Hospital - Elliot Lake, Elliot Lake, Ontario"
      }
    },
    {
      "label": "St. Joseph's Health Care London - Parkwood",
      "value": {
        "lat": 42.955419,
        "lon": -81.225272,
        "display_name": "St. Joseph's Health Care London - Parkwood, London, Ontario"
      }
    },
    {
      "label": "St. Joseph's Health Centre - Toronto",
      "value": {
        "lat": 43.640631,
        "lon": -79.450314,
        "display_name": "St. Joseph's Health Centre - Toronto, Toronto, Ontario"
      }
    },
    {
      "label": "St. Joseph's Healthcare - Charlton Campus",
      "value": {
        "lat": 43.240445,
        "lon": -79.884108,
        "display_name": "St. Joseph's Healthcare - Charlton Campus, Hamilton, Ontario"
      }
    },
    {
      "label": "St. Joseph's Healthcare - West 5th Campus",
      "value": {
        "lat": 43.240445,
        "lon": -79.884108,
        "display_name": "St. Joseph's Healthcare - West 5th Campus, Hamilton, Ontario"
      }
    },
    {
      "label": "St. Joseph's Healthcare Hamilton",
      "value": {
        "lat": 43.253974,
        "lon": -79.870576,
        "display_name": "St. Joseph's Healthcare Hamilton, Hamilton, Ontario"
      }
    },
    {
      "label": "St. Joseph's Healthcare Hamilton - King Campus",
      "value": {
        "lat": 43.220589,
        "lon": -79.774885,
        "display_name": "St. Joseph's Healthcare Hamilton - King Campus, Hamilton, Ontario"
      }
    },
    {
      "label": "St. Joseph's Hospital - London",
      "value": {
        "lat": 43.00028,
        "lon": -81.253347,
        "display_name": "St. Joseph's Hospital - London, London, Ontario"
      }
    },
    {
      "label": "St. Mary's General Hospital",
      "value": {
        "lat": 43.438288,
        "lon": -80.500798,
        "display_name": "St. Mary's General Hospital, Kitchener, Ontario"
      }
    },
    {
      "label": "St. Michael's Hospital - Bond St. Site",
      "value": {
        "lat": 43.653915,
        "lon": -79.377671,
        "display_name": "St. Michael's Hospital - Bond St. Site, Toronto, Ontario"
      }
    },
    {
      "label": "St. Thomas - Elgin General Hospital",
      "value": {
        "lat": 42.762878,
        "lon": -81.180783,
        "display_name": "St. Thomas - Elgin General Hospital, St Thomas, Ontario"
      }
    },
    {
      "label": "Stevenson Memorial Hospital",
      "value": {
        "lat": 44.155748,
        "lon": -79.875121,
        "display_name": "Stevenson Memorial Hospital, Alliston, Ontario"
      }
    },
    {
      "label": "Strathroy Middlesex General Hospital",
      "value": {
        "lat": 42.960938,
        "lon": -81.634696,
        "display_name": "Strathroy Middlesex General Hospital, Strathroy, Ontario"
      }
    },
    {
      "label": "Sunnybrook Health Sciences Centre",
      "value": {
        "lat": 43.665019,
        "lon": -79.382336,
        "display_name": "Sunnybrook Health Sciences Centre, Toronto, Ontario"
      }
    },
    {
      "label": "Sunnybrook Health Sciences Centre - Women's College Hospital",
      "value": {
        "lat": 43.66171,
        "lon": -79.387745,
        "display_name": "Sunnybrook Health Sciences Centre - Women's College Hospital, Toronto, Ontario"
      }
    },
    {
      "label": "Temiskaming Hospital",
      "value": {
        "lat": 47.495162,
        "lon": -79.693153,
        "display_name": "Temiskaming Hospital, New Liskeard, Ontario"
      }
    },
    {
      "label": "THE OTTAWA HOSPITAL/L'H\u00d4PITAL D'OTTAWA - GENERAL CAMPUS",
      "value": {
        "lat": 45.40172,
        "lon": -75.64694,
        "display_name": "THE OTTAWA HOSPITAL/L'H\u00d4PITAL D'OTTAWA - GENERAL CAMPUS, Ottawa, Ontario"
      }
    },
    {
      "label": "the Ottawa Hospital - Riverside Campus",
      "value": {
        "lat": 45.396355,
        "lon": -75.668856,
        "display_name": "the Ottawa Hospital - Riverside Campus, Ottawa, Ontario"
      }
    },
    {
      "label": "THE OTTAWA HOSPITAL/L'H\u00d4PITAL D'OTTAWA - THE REHABILITATION CENTRE",
      "value": {
        "lat": 45.403155,
        "lon": -75.648443,
        "display_name": "THE OTTAWA HOSPITAL/L'H\u00d4PITAL D'OTTAWA - THE REHABILITATION CENTRE, Ottawa, Ontario"
      }
    },
    {
      "label": "the Ottawa Hospital - Civic Campus",
      "value": {
        "lat": 45.392579,
        "lon": -75.721436,
        "display_name": "the Ottawa Hospital - Civic Campus, Ottawa, Ontario"
      }
    },
    {
      "label": "Check Address for Confirmation",
      "value": {
        "lat": 44.416,
        "lon": -79.661931,
        "display_name": "Check Address for Confirmation, Barrie, Ontario"
      }
    },
    {
      "label": "the Scarborough Hospital - General Campus",
      "value": {
        "lat": 43.755734,
        "lon": -79.246831,
        "display_name": "the Scarborough Hospital - General Campus, Scarborough, Ontario"
      }
    },
    {
      "label": "the Scarborough Hospital - Grace Campus",
      "value": {
        "lat": 43.801829,
        "lon": -79.308757,
        "display_name": "the Scarborough Hospital - Grace Campus, Scarborough, Ontario"
      }
    },
    {
      "label": "the University of Ottawa Heart Institute",
      "value": {
        "lat": 45.394161,
        "lon": -75.720681,
        "display_name": "the University of Ottawa Heart Institute, Ottawa, Ontario"
      }
    },
    {
      "label": "Thessalon Hospital",
      "value": {
        "lat": 46.263021,
        "lon": -83.562463,
        "display_name": "Thessalon Hospital, Thessalon, Ontario"
      }
    },
    {
      "label": "Thunder Bay Regional Health Sciences Centre",
      "value": {
        "lat": 48.424713,
        "lon": -89.269097,
        "display_name": "Thunder Bay Regional Health Sciences Centre, Thunder Bay, Ontario"
      }
    },
    {
      "label": "Tillsonburg District Memorial Hospital",
      "value": {
        "lat": 42.863122,
        "lon": -80.734751,
        "display_name": "Tillsonburg District Memorial Hospital, Tillsonburg, Ontario"
      }
    },
    {
      "label": "TIMMINS AND DISTRICT HOSPITAL/L'H\u00d4PITAL DE TIMMINS ET DU DISTRICT",
      "value": {
        "lat": 48.487587,
        "lon": -81.313592,
        "display_name": "TIMMINS AND DISTRICT HOSPITAL/L'H\u00d4PITAL DE TIMMINS ET DU DISTRICT, Timmins, Ontario"
      }
    },
    {
      "label": "Toronto East General Hospital",
      "value": {
        "lat": 43.689759,
        "lon": -79.325923,
        "display_name": "Toronto East General Hospital, Toronto, Ontario"
      }
    },
    {
      "label": "Toronto Rehabilitation Institute - e. w. Bickle Centre",
      "value": {
        "lat": 43.634803,
        "lon": -79.432709,
        "display_name": "Toronto Rehabilitation Institute - e. w. Bickle Centre, Toronto, Ontario"
      }
    },
    {
      "label": "Toronto Rehabilitation Institute - Hillcrest Centre",
      "value": {
        "lat": 43.677547,
        "lon": -79.415592,
        "display_name": "Toronto Rehabilitation Institute - Hillcrest Centre, Toronto, Ontario"
      }
    },
    {
      "label": "Toronto Rehabilitation Institute - Lyndhurst Centre",
      "value": {
        "lat": 43.718489,
        "lon": -79.369712,
        "display_name": "Toronto Rehabilitation Institute - Lyndhurst Centre, Toronto, Ontario"
      }
    },
    {
      "label": "Toronto Rehabilitation Institute - Rumsey Centre",
      "value": {
        "lat": 43.718729,
        "lon": -79.371551,
        "display_name": "Toronto Rehabilitation Institute - Rumsey Centre, Toronto, Ontario"
      }
    },
    {
      "label": "Toronto Rehabilitation Institute - University Centre",
      "value": {
        "lat": 43.656711,
        "lon": -79.389908,
        "display_name": "Toronto Rehabilitation Institute - University Centre, Toronto, Ontario"
      }
    },
    {
      "label": "Trillium Health Partners \u0097 Mississauga Hospital",
      "value": {
        "lat": 43.571586,
        "lon": -79.607685,
        "display_name": "Trillium Health Partners \u0097 Mississauga Hospital, Mississauga, Ontario"
      }
    },
    {
      "label": "Trillium Health Partners - Queensway Health Centre",
      "value": {
        "lat": 43.609267,
        "lon": -79.56257,
        "display_name": "Trillium Health Partners - Queensway Health Centre, Etobicoke, Ontario"
      }
    },
    {
      "label": "University Health Network - Princess Margaret Hospital",
      "value": {
        "lat": 43.658074,
        "lon": -79.390597,
        "display_name": "University Health Network - Princess Margaret Hospital, Toronto, Ontario"
      }
    },
    {
      "label": "University Health Network - Toronto General Hospital",
      "value": {
        "lat": 43.659111,
        "lon": -79.388209,
        "display_name": "University Health Network - Toronto General Hospital, Toronto, Ontario"
      }
    },
    {
      "label": "University Health Network - Toronto Western Hospital",
      "value": {
        "lat": 43.653703,
        "lon": -79.406094,
        "display_name": "University Health Network - Toronto Western Hospital, Toronto, Ontario"
      }
    },
    {
      "label": "Waypoint Centre for Mental Health Care",
      "value": {
        "lat": 44.800909,
        "lon": -79.929477,
        "display_name": "Waypoint Centre for Mental Health Care, Penetanguishene, Ontario"
      }
    },
    {
      "label": "Weeneebayko Area Health Authority - Attawapiskat",
      "value": {
        "lat": 52.924257,
        "lon": -82.427803,
        "display_name": "Weeneebayko Area Health Authority - Attawapiskat, Moose Factory, Ontario"
      }
    },
    {
      "label": "Weeneebayko Area Health Authority - Moosonee",
      "value": {
        "lat": 51.272743,
        "lon": -80.646826,
        "display_name": "Weeneebayko Area Health Authority - Moosonee, Moosonee, Ontario"
      }
    },
    {
      "label": "Weeneebayko General Hospital",
      "value": {
        "lat": 51.249964,
        "lon": -80.616264,
        "display_name": "Weeneebayko General Hospital, Moose Factory, Ontario"
      }
    },
    {
      "label": "Weenusk First Nation",
      "value": {
        "lat": 54.993904,
        "lon": -85.427748,
        "display_name": "Weenusk First Nation, Peawanuck, Ontario"
      }
    },
    {
      "label": "Wellington Health Care Alliance - Palmerston and District Hospital",
      "value": {
        "lat": 43.839041,
        "lon": -80.842839,
        "display_name": "Wellington Health Care Alliance - Palmerston and District Hospital, Palmerston, Ontario"
      }
    },
    {
      "label": "West Haldimand General Hospital",
      "value": {
        "lat": 42.958768,
        "lon": -80.044781,
        "display_name": "West Haldimand General Hospital, Hagersville, Ontario"
      }
    },
    {
      "label": "West Lincoln Memorial Hospital",
      "value": {
        "lat": 43.188256,
        "lon": -79.541906,
        "display_name": "West Lincoln Memorial Hospital, Grimsby, Ontario"
      }
    },
    {
      "label": "the West Nipissing General Hospital",
      "value": {
        "lat": 46.372281,
        "lon": -79.916203,
        "display_name": "the West Nipissing General Hospital, Sturgeon Falls, Ontario"
      }
    },
    {
      "label": "West Park Healthcare Centre",
      "value": {
        "lat": 43.690044,
        "lon": -79.508181,
        "display_name": "West Park Healthcare Centre, Toronto, Ontario"
      }
    },
    {
      "label": "West Parry Sound Health Centre",
      "value": {
        "lat": 45.340743,
        "lon": -80.016767,
        "display_name": "West Parry Sound Health Centre, Parry Sound, Ontario"
      }
    },
    {
      "label": "William Osler Health System - Brampton Civic Hospital",
      "value": {
        "lat": 43.747466,
        "lon": -79.743223,
        "display_name": "William Osler Health System - Brampton Civic Hospital, Brampton, Ontario"
      }
    },
    {
      "label": "William Osler Health System - Etobicoke",
      "value": {
        "lat": 43.729294,
        "lon": -79.598436,
        "display_name": "William Osler Health System - Etobicoke, Etobicoke, Ontario"
      }
    },
    {
      "label": "William Osler Health System - Peel Memorial",
      "value": {
        "lat": 43.690476,
        "lon": -79.751431,
        "display_name": "William Osler Health System - Peel Memorial, Brampton, Ontario"
      }
    },
    {
      "label": "Wilson Memorial General Hospital",
      "value": {
        "lat": 48.718523,
        "lon": -86.3754,
        "display_name": "Wilson Memorial General Hospital, Marathon, Ontario"
      }
    },
    {
      "label": "Winchester District Memorial Hospital",
      "value": {
        "lat": 45.088616,
        "lon": -75.35226,
        "display_name": "Winchester District Memorial Hospital, Winchester, Ontario"
      }
    },
    {
      "label": "Windsor Regional Hospital - Mary Vale",
      "value": {
        "lat": 42.289256,
        "lon": -83.073033,
        "display_name": "Windsor Regional Hospital - Mary Vale, Windsor, Ontario"
      }
    },
    {
      "label": "Windsor Regional Hospital - Metropolitan Campus",
      "value": {
        "lat": 42.300406,
        "lon": -82.99723,
        "display_name": "Windsor Regional Hospital - Metropolitan Campus, Windsor, Ontario"
      }
    },
    {
      "label": "Windsor Regional Hospital - Western Campus",
      "value": {
        "lat": 42.285649,
        "lon": -83.063431,
        "display_name": "Windsor Regional Hospital - Western Campus, Windsor, Ontario"
      }
    },
    {
      "label": "Woodstock General Hospital",
      "value": {
        "lat": 43.106451,
        "lon": -80.753701,
        "display_name": "Woodstock General Hospital, Woodstock, Ontario"
      }
    }
  ],
  "Prince Edward Island": [
    {
      "label": "Pei Cancer Treatment Centre",
      "value": {
        "lat": 46.255358,
        "lon": -63.100222,
        "display_name": "Pei Cancer Treatment Centre, Charlottetown, Prince Edward Island"
      }
    },
    {
      "label": "Western Hospital Corporation",
      "value": {
        "lat": 46.810829,
        "lon": -64.066393,
        "display_name": "Western Hospital Corporation, Alberton, Prince Edward Island"
      }
    },
    {
      "label": "Queen Elizabeth Hospital",
      "value": {
        "lat": 46.255749,
        "lon": -63.102348,
        "display_name": "Queen Elizabeth Hospital, Charlottetown, Prince Edward Island"
      }
    },
    {
      "label": "Prince County Hospital",
      "value": {
        "lat": 46.41743,
        "lon": -63.773048,
        "display_name": "Prince County Hospital, Summerside, Prince Edward Island"
      }
    },
    {
      "label": "Western Hospital",
      "value": {
        "lat": 46.81108,
        "lon": -64.066028,
        "display_name": "Western Hospital, Alberton, Prince Edward Island"
      }
    },
    {
      "label": "Souris Hospital",
      "value": {
        "lat": 46.352139,
        "lon": -62.245128,
        "display_name": "Souris Hospital, Souris, Prince Edward Island"
      }
    },
    {
      "label": "Kings County Memorial Hospital",
      "value": {
        "lat": 46.16934,
        "lon": -62.655768,
        "display_name": "Kings County Memorial Hospital, Montague, Prince Edward Island"
      }
    },
    {
      "label": "Community Hospital o'Leary",
      "value": {
        "lat": 46.70627,
        "lon": -64.238128,
        "display_name": "Community Hospital o'Leary, O'Leary, Prince Edward Island"
      }
    },
    {
      "label": "Hillsborough Psychiatric Hospital",
      "value": {
        "lat": 46.256379,
        "lon": -63.093208,
        "display_name": "Hillsborough Psychiatric Hospital, Charlottetown, Prince Edward Island"
      }
    }
  ],
  "Quebec": [
    {
      "label": "CENTRE DE SANT\u00c9 SAINTE-FAMILLE",
      "value": {
        "lat": 47.334412,
        "lon": -79.445831,
        "display_name": "CENTRE DE SANT\u00c9 SAINTE-FAMILLE, Ville-Marie, Quebec"
      }
    },
    {
      "label": "CENTRE DE SANT\u00c9 TULATTAVIK DE L'UNGAVA",
      "value": {
        "lat": 58.106859,
        "lon": -68.405432,
        "display_name": "CENTRE DE SANT\u00c9 TULATTAVIK DE L'UNGAVA, Kuujjuaq, Quebec"
      }
    },
    {
      "label": "CENTRE DE SANT\u00c9 VALL\u00c9E-DE-LA-GATINEAU",
      "value": {
        "lat": 46.391071,
        "lon": -75.978757,
        "display_name": "CENTRE DE SANT\u00c9 VALL\u00c9E-DE-LA-GATINEAU, Maniwaki, Quebec"
      }
    },
    {
      "label": "CENTRE HOSPITALIER GATINEAU MEMORIAL",
      "value": {
        "lat": 45.648404,
        "lon": -75.932481,
        "display_name": "CENTRE HOSPITALIER GATINEAU MEMORIAL, Wakefield, Quebec"
      }
    },
    {
      "label": "CENTRE HOSPITALIER ROBERT-GIFFARD",
      "value": {
        "lat": 46.847932,
        "lon": -71.220726,
        "display_name": "CENTRE HOSPITALIER ROBERT-GIFFARD, Qu\u00e9bec City, Quebec"
      }
    },
    {
      "label": "CH - CHSLD - CLSC CL\u00c9OPHAS-CLAVEAU",
      "value": {
        "lat": 48.337581,
        "lon": -70.879626,
        "display_name": "CH - CHSLD - CLSC CL\u00c9OPHAS-CLAVEAU, La Baie, Quebec"
      }
    },
    {
      "label": "CH DAMQUI",
      "value": {
        "lat": 48.468969,
        "lon": -67.420262,
        "display_name": "CH DAMQUI, Amqui, Quebec"
      }
    },
    {
      "label": "CH DE L'UNIVERSIT\u00c9 DE MONTR\u00c9AL (CHUM) - H\u00d4PITAL SAINT-LUC",
      "value": {
        "lat": 45.512315,
        "lon": -73.557714,
        "display_name": "CH DE L'UNIVERSIT\u00c9 DE MONTR\u00c9AL (CHUM) - H\u00d4PITAL SAINT-LUC, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CH DE METABETCHOUAN - LAC-A-LA-CROIX ET CLSC SECTEUR-SUD",
      "value": {
        "lat": 48.425803,
        "lon": -71.866405,
        "display_name": "CH DE METABETCHOUAN - LAC-A-LA-CROIX ET CLSC SECTEUR-SUD, M\u00e9tabetchouan, Quebec"
      }
    },
    {
      "label": "CH DU CAP-ST-IGNACE",
      "value": {
        "lat": 47.039961,
        "lon": -70.455979,
        "display_name": "CH DU CAP-ST-IGNACE, Cap-Saint-Ignace, Quebec"
      }
    },
    {
      "label": "CH DU CENTRE-DE-LA-MAURICIE",
      "value": {
        "lat": 46.525712,
        "lon": -72.743671,
        "display_name": "CH DU CENTRE-DE-LA-MAURICIE, Shawinigan-Sud, Quebec"
      }
    },
    {
      "label": "CH DU GRANIT",
      "value": {
        "lat": 45.588749,
        "lon": -70.905799,
        "display_name": "CH DU GRANIT, Lac-M\u00e9gantic, Quebec"
      }
    },
    {
      "label": "CH LA SARRE",
      "value": {
        "lat": 48.786456,
        "lon": -79.198577,
        "display_name": "CH LA SARRE, La Sarre, Quebec"
      }
    },
    {
      "label": "CH MALARTIC INC.",
      "value": {
        "lat": 48.141587,
        "lon": -78.128285,
        "display_name": "CH MALARTIC INC., Malartic, Quebec"
      }
    },
    {
      "label": "CH R\u00c9GIONAL DE TROIS-RIVI\u00c8RES",
      "value": {
        "lat": 46.34747,
        "lon": -72.545669,
        "display_name": "CH R\u00c9GIONAL DE TROIS-RIVI\u00c8RES, Trois-Rivi\u00e8res, Quebec"
      }
    },
    {
      "label": "CH R\u00c9GIONAL DE TROIS-RIVI\u00c8RES - PAVILLON SAINTE-MARIE",
      "value": {
        "lat": 46.354875,
        "lon": -72.561961,
        "display_name": "CH R\u00c9GIONAL DE TROIS-RIVI\u00c8RES - PAVILLON SAINTE-MARIE, Trois-Rivi\u00e8res, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL SAINT-FRAN\u00c7OIS DASSISE",
      "value": {
        "lat": 46.827533,
        "lon": -71.236389,
        "display_name": "H\u00d4PITAL SAINT-FRAN\u00c7OIS DASSISE, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "CREE BOARD OF HEALTH AND SOCIAL SERVICES OF JAMES BAY/KUUJJUARAPIK",
      "value": {
        "lat": 55.274399,
        "lon": -77.761614,
        "display_name": "CREE BOARD OF HEALTH AND SOCIAL SERVICES OF JAMES BAY/KUUJJUARAPIK, Kuujjuarapik, Quebec"
      }
    },
    {
      "label": "CRSSS DE LA BAIE-JAMES",
      "value": {
        "lat": 49.913688,
        "lon": -74.356786,
        "display_name": "CRSSS DE LA BAIE-JAMES, Chibougamau, Quebec"
      }
    },
    {
      "label": "CSSS DE BEAUCE",
      "value": {
        "lat": 46.110659,
        "lon": -70.683786,
        "display_name": "CSSS DE BEAUCE, Saint-Georges, Quebec"
      }
    },
    {
      "label": "CSSS DE CHICOUTIMI",
      "value": {
        "lat": 48.425917,
        "lon": -71.048764,
        "display_name": "CSSS DE CHICOUTIMI, Chicoutimi, Quebec"
      }
    },
    {
      "label": "CSSS DE LA HAUTE-YAMASKA",
      "value": {
        "lat": 45.412502,
        "lon": -72.722638,
        "display_name": "CSSS DE LA HAUTE-YAMASKA, Granby, Quebec"
      }
    },
    {
      "label": "CSSS DE LAC-SAINT-JEAN-EST",
      "value": {
        "lat": 48.548021,
        "lon": -71.664643,
        "display_name": "CSSS DE LAC-SAINT-JEAN-EST, Alma, Quebec"
      }
    },
    {
      "label": "CSSS LES ESKERS DE L'ABITIBI",
      "value": {
        "lat": 48.57631,
        "lon": -78.125164,
        "display_name": "CSSS LES ESKERS DE L'ABITIBI, Amos, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL CHRIST-ROI",
      "value": {
        "lat": 46.811356,
        "lon": -71.258375,
        "display_name": "H\u00d4PITAL CHRIST-ROI, Qu\u00e9bec City, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE JOUR G\u00c9RIATRIQUE",
      "value": {
        "lat": 45.493517,
        "lon": -75.676739,
        "display_name": "H\u00d4PITAL DE JOUR G\u00c9RIATRIQUE, Gatineau, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DU CHRIST-ROI",
      "value": {
        "lat": 46.2306,
        "lon": -72.626773,
        "display_name": "H\u00d4PITAL DU CHRIST-ROI, Nicolet, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL LAVAL",
      "value": {
        "lat": 46.779119,
        "lon": -71.297602,
        "display_name": "H\u00d4PITAL LAVAL, Sainte-Foy, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL LOUIS-H. LAFONTAINE",
      "value": {
        "lat": 45.588494,
        "lon": -73.529141,
        "display_name": "H\u00d4PITAL LOUIS-H. LAFONTAINE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL RIVI\u00c8RE-DES-PRAIRIES",
      "value": {
        "lat": 45.627177,
        "lon": -73.614738,
        "display_name": "H\u00d4PITAL RIVI\u00c8RE-DES-PRAIRIES, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITALIER RICHELIEU",
      "value": {
        "lat": 46.04555,
        "lon": -73.093519,
        "display_name": "H\u00d4PITALIER RICHELIEU, Sorel-Tracy, Quebec"
      }
    },
    {
      "label": "H\u00d4TEL-DIEU DE MONTMAGNY",
      "value": {
        "lat": 46.976367,
        "lon": -70.597072,
        "display_name": "H\u00d4TEL-DIEU DE MONTMAGNY, Montmagny, Quebec"
      }
    },
    {
      "label": "JEWISH REHABILITATION HOSPITAL",
      "value": {
        "lat": 45.548623,
        "lon": -73.737591,
        "display_name": "JEWISH REHABILITATION HOSPITAL, Laval, Quebec"
      }
    },
    {
      "label": "MCGILL UNIVERSITY HEALTH CENTRE - MONTR\u00c9AL CHEST INSTITUTE",
      "value": {
        "lat": 45.513014,
        "lon": -73.57521,
        "display_name": "MCGILL UNIVERSITY HEALTH CENTRE - MONTR\u00c9AL CHEST INSTITUTE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "SHRINERS HOSPITAL FOR CHILDREN",
      "value": {
        "lat": 45.499581,
        "lon": -73.588351,
        "display_name": "SHRINERS HOSPITAL FOR CHILDREN, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL MAISONNEUVE-ROSEMONT",
      "value": {
        "lat": 45.574065,
        "lon": -73.559548,
        "display_name": "H\u00d4PITAL MAISONNEUVE-ROSEMONT, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE METROPOLITAIN DE CHIRURGIE PLASTIQUE",
      "value": {
        "lat": 45.545449,
        "lon": -73.692942,
        "display_name": "CENTRE METROPOLITAIN DE CHIRURGIE PLASTIQUE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "LA MAISON MICHEL SARRAZIN",
      "value": {
        "lat": 46.773479,
        "lon": -71.251598,
        "display_name": "LA MAISON MICHEL SARRAZIN, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "CENTRE DE SANT\u00c9 ET DE SERVICES SOCIAUX DU HAUT-SAINT-MAURICE",
      "value": {
        "lat": 47.428451,
        "lon": -72.785692,
        "display_name": "CENTRE DE SANT\u00c9 ET DE SERVICES SOCIAUX DU HAUT-SAINT-MAURICE, La Tuque, Quebec"
      }
    },
    {
      "label": "VILLA MEDICA",
      "value": {
        "lat": 45.514974,
        "lon": -73.568738,
        "display_name": "VILLA MEDICA, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CHUS - H\u00d4PITAL FLEURIMONT",
      "value": {
        "lat": 45.447736,
        "lon": -71.869027,
        "display_name": "CHUS - H\u00d4PITAL FLEURIMONT, Sherbrooke, Quebec"
      }
    },
    {
      "label": "CHUS - H\u00d4TEL-DIEU DE SHERBROOKE",
      "value": {
        "lat": 45.398442,
        "lon": -71.877948,
        "display_name": "CHUS - H\u00d4TEL-DIEU DE SHERBROOKE, Sherbrooke, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DU SAINT-SACREMENT",
      "value": {
        "lat": 46.799357,
        "lon": -71.246411,
        "display_name": "H\u00d4PITAL DU SAINT-SACREMENT, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "PAVILLON L'H\u00d4TEL-DIEU DE QU\u00c9BEC",
      "value": {
        "lat": 46.81539,
        "lon": -71.210994,
        "display_name": "PAVILLON L'H\u00d4TEL-DIEU DE QU\u00c9BEC, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE MONT-LAURIER",
      "value": {
        "lat": 46.549211,
        "lon": -75.517655,
        "display_name": "H\u00d4PITAL DE MONT-LAURIER, Mont-Laurier, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE VERDUN",
      "value": {
        "lat": 45.464098,
        "lon": -73.563989,
        "display_name": "H\u00d4PITAL DE VERDUN, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE D'H\u00c9BERGEMENT DE SAINT-ANTONIN",
      "value": {
        "lat": 47.76243,
        "lon": -69.478676,
        "display_name": "CENTRE D'H\u00c9BERGEMENT DE SAINT-ANTONIN, Saint-Antonin, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE CHICOUTIMI",
      "value": {
        "lat": 48.425975,
        "lon": -71.048599,
        "display_name": "H\u00d4PITAL DE CHICOUTIMI, Saguenay, Quebec"
      }
    },
    {
      "label": "HOPITAL DE JOUR L'ENVOL",
      "value": {
        "lat": 45.444268,
        "lon": -73.581796,
        "display_name": "HOPITAL DE JOUR L'ENVOL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE MATANE",
      "value": {
        "lat": 48.843566,
        "lon": -67.524416,
        "display_name": "H\u00d4PITAL DE MATANE, Matane, Quebec"
      }
    },
    {
      "label": "H\u00d4TEL-DIEU DU CENTRE HOSPITALIER DE L'UNIVERSIT\u00c9 DE MONTR\u00c9AL",
      "value": {
        "lat": 45.513942,
        "lon": -73.578112,
        "display_name": "H\u00d4TEL-DIEU DU CENTRE HOSPITALIER DE L'UNIVERSIT\u00c9 DE MONTR\u00c9AL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL D'ALMA",
      "value": {
        "lat": 48.55062,
        "lon": -71.665075,
        "display_name": "H\u00d4PITAL D'ALMA, Alma, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE L\u00c9VIS",
      "value": {
        "lat": 46.81568,
        "lon": -71.174936,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE L\u00c9VIS, L\u00e9vis, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE GASP\u00c9",
      "value": {
        "lat": 48.812942,
        "lon": -64.496646,
        "display_name": "H\u00d4PITAL DE GASP\u00c9, Gasp\u00e9, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE MOUSSETTE",
      "value": {
        "lat": 45.439517,
        "lon": -75.743786,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE MOUSSETTE, Gatineau, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE RAWDON",
      "value": {
        "lat": 46.041693,
        "lon": -73.702641,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE RAWDON, Rawdon, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE GATINEAU",
      "value": {
        "lat": 45.493296,
        "lon": -75.691064,
        "display_name": "H\u00d4PITAL DE GATINEAU, Gatineau, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE LA MINGANIE",
      "value": {
        "lat": 50.237811,
        "lon": -63.605244,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE LA MINGANIE, Havre-Saint-Pierre, Quebec"
      }
    },
    {
      "label": "CENTRE DE SANT\u00c9 DE CHIBOUGAMAU",
      "value": {
        "lat": 49.915951,
        "lon": -74.349183,
        "display_name": "CENTRE DE SANT\u00c9 DE CHIBOUGAMAU, Chibougamau, Quebec"
      }
    },
    {
      "label": "CENTRE DE SANT\u00c9 LEBEL",
      "value": {
        "lat": 49.05608,
        "lon": -76.983316,
        "display_name": "CENTRE DE SANT\u00c9 LEBEL, Lebel-Sur-Qu\u00e9villon, Quebec"
      }
    },
    {
      "label": "CENTRE DE SANT\u00c9 ISLE-DIEU",
      "value": {
        "lat": 49.756841,
        "lon": -77.628286,
        "display_name": "CENTRE DE SANT\u00c9 ISLE-DIEU, Matagami, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE HULL",
      "value": {
        "lat": 45.444873,
        "lon": -75.746033,
        "display_name": "H\u00d4PITAL DE HULL, Gatineau, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DU CENTRE-DE-LA-MAURICIE",
      "value": {
        "lat": 46.525584,
        "lon": -72.743393,
        "display_name": "H\u00d4PITAL DU CENTRE-DE-LA-MAURICIE, Shawinigan, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE MANIWAKI",
      "value": {
        "lat": 46.39085,
        "lon": -75.979405,
        "display_name": "H\u00d4PITAL DE MANIWAKI, Maniwaki, Quebec"
      }
    },
    {
      "label": "PAVILLON RACHEL-TOURIGNY",
      "value": {
        "lat": 45.574003,
        "lon": -73.556831,
        "display_name": "PAVILLON RACHEL-TOURIGNY, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES PROVIDENCE",
      "value": {
        "lat": 45.41038,
        "lon": -72.716617,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES PROVIDENCE, Granby, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE LAVAL",
      "value": {
        "lat": 45.552264,
        "lon": -73.746239,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE LAVAL, Laval, Quebec"
      }
    },
    {
      "label": "L'H\u00d4PITAL DE MONTR\u00c9AL POUR ENFANTS",
      "value": {
        "lat": 45.488959,
        "lon": -73.582312,
        "display_name": "L'H\u00d4PITAL DE MONTR\u00c9AL POUR ENFANTS, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE SOINS PSYCHIATRIQUES BEAUBIEN",
      "value": {
        "lat": 45.593553,
        "lon": -73.558021,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE SOINS PSYCHIATRIQUES BEAUBIEN, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL NEUROLOGIQUE DE MONTR\u00c9AL",
      "value": {
        "lat": 45.508956,
        "lon": -73.581396,
        "display_name": "H\u00d4PITAL NEUROLOGIQUE DE MONTR\u00c9AL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ROYAL VICTORIA",
      "value": {
        "lat": 45.5082,
        "lon": -73.581456,
        "display_name": "H\u00d4PITAL ROYAL VICTORIA, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE TERREBONNE",
      "value": {
        "lat": 45.708699,
        "lon": -73.624928,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE TERREBONNE, Terrebonne, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE TROIS-PISTOLES",
      "value": {
        "lat": 48.132723,
        "lon": -69.159279,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE TROIS-PISTOLES, Trois-Pistoles, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE L\u00c9VIS",
      "value": {
        "lat": 46.821339,
        "lon": -71.17908,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE L\u00c9VIS, L\u00e9vis, Quebec"
      }
    },
    {
      "label": "H\u00d4TEL-DIEU DE L\u00c9VIS",
      "value": {
        "lat": 46.814863,
        "lon": -71.177405,
        "display_name": "H\u00d4TEL-DIEU DE L\u00c9VIS, L\u00e9vis, Quebec"
      }
    },
    {
      "label": "CHSLD DES B\u00c2TISSEURS",
      "value": {
        "lat": 45.540646,
        "lon": -73.68874,
        "display_name": "CHSLD DES B\u00c2TISSEURS, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE L'ARCHIPEL",
      "value": {
        "lat": 47.375575,
        "lon": -61.868773,
        "display_name": "H\u00d4PITAL DE L'ARCHIPEL, Les \u00celes-De-La-Madeleine, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE MARIA",
      "value": {
        "lat": 48.169149,
        "lon": -65.993516,
        "display_name": "H\u00d4PITAL DE MARIA, Maria, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL BARRIE M\u00c9MORIAL",
      "value": {
        "lat": 45.126343,
        "lon": -73.999867,
        "display_name": "H\u00d4PITAL BARRIE M\u00c9MORIAL, Ormstown, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE SOINS PSYCHIATRIQUES D'ANJOU",
      "value": {
        "lat": 45.597923,
        "lon": -73.570774,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE SOINS PSYCHIATRIQUES D'ANJOU, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL PIERRE-LE GARDEUR",
      "value": {
        "lat": 45.723978,
        "lon": -73.510536,
        "display_name": "H\u00d4PITAL PIERRE-LE GARDEUR, Terrebonne, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES SAINT-JACQUES",
      "value": {
        "lat": 45.39799,
        "lon": -72.726613,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES SAINT-JACQUES, Granby, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE LACHINE",
      "value": {
        "lat": 45.440835,
        "lon": -73.676985,
        "display_name": "H\u00d4PITAL DE LACHINE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE BAIE-SAINT-PAUL",
      "value": {
        "lat": 47.439773,
        "lon": -70.512063,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE BAIE-SAINT-PAUL, Baie-Saint-Paul, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE L'ENFANT-J\u00c9SUS",
      "value": {
        "lat": 46.837483,
        "lon": -71.22604,
        "display_name": "H\u00d4PITAL DE L'ENFANT-J\u00c9SUS, Qu\u00e9bec City, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL RICHARDSON",
      "value": {
        "lat": 45.471955,
        "lon": -73.645944,
        "display_name": "H\u00d4PITAL RICHARDSON, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL FLEURY",
      "value": {
        "lat": 45.57181,
        "lon": -73.650367,
        "display_name": "H\u00d4PITAL FLEURY, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL JEAN-TALON",
      "value": {
        "lat": 45.545943,
        "lon": -73.609538,
        "display_name": "H\u00d4PITAL JEAN-TALON, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE FERMONT",
      "value": {
        "lat": 52.79669,
        "lon": -67.090301,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE FERMONT, Fermont, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE LA CIT\u00c9-DE-LA-SANT\u00c9",
      "value": {
        "lat": 45.603319,
        "lon": -73.710819,
        "display_name": "H\u00d4PITAL DE LA CIT\u00c9-DE-LA-SANT\u00c9, Laval, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE SOINS PSYCHIATRIQUES DE SAINT-L\u00c9ONARD",
      "value": {
        "lat": 45.594061,
        "lon": -73.581337,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE SOINS PSYCHIATRIQUES DE SAINT-L\u00c9ONARD, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SANTE RENE-RICARD",
      "value": {
        "lat": 49.780757,
        "lon": -74.854395,
        "display_name": "CENTRE DE SANTE RENE-RICARD, Chapais, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL SAINTE-CROIX",
      "value": {
        "lat": 45.880009,
        "lon": -72.477304,
        "display_name": "H\u00d4PITAL SAINTE-CROIX, Drummondville, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE SAINT-EUSTACHE",
      "value": {
        "lat": 45.571266,
        "lon": -73.913739,
        "display_name": "H\u00d4PITAL DE SAINT-EUSTACHE, Saint-Eustache, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE SAINT-J\u00c9R\u00d4ME",
      "value": {
        "lat": 45.765569,
        "lon": -74.000191,
        "display_name": "H\u00d4PITAL DE SAINT-J\u00c9R\u00d4ME, Saint-J\u00e9r\u00f4me, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL LAVAL",
      "value": {
        "lat": 46.778485,
        "lon": -71.297165,
        "display_name": "H\u00d4PITAL LAVAL, Qu\u00e9bec City, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE CHISASIBI",
      "value": {
        "lat": 53.783844,
        "lon": -78.891546,
        "display_name": "H\u00d4PITAL DE CHISASIBI, Chisasibi, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE GASP\u00c9",
      "value": {
        "lat": 48.812749,
        "lon": -64.49529,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE GASP\u00c9, Gasp\u00e9, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES DE RIVI\u00c8RE-ROUGE",
      "value": {
        "lat": 46.420799,
        "lon": -74.884682,
        "display_name": "CENTRE DE SERVICES DE RIVI\u00c8RE-ROUGE, Rivi\u00e8re-Rouge, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE LAC-ETCHEMIN",
      "value": {
        "lat": 46.40048,
        "lon": -70.498069,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE LAC-ETCHEMIN, Lac-Etchemin, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DES ESCOUMINS",
      "value": {
        "lat": 48.352061,
        "lon": -69.407095,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DES ESCOUMINS, Les Escoumins, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE FORESTVILLE",
      "value": {
        "lat": 48.737214,
        "lon": -69.074188,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE FORESTVILLE, Forestville, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DOUGLAS",
      "value": {
        "lat": 45.442083,
        "lon": -73.584223,
        "display_name": "H\u00d4PITAL DOUGLAS, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SANT\u00c9 ET DE SERVICES SOCIAUX DE MEMPHR\u00c9MAGOG",
      "value": {
        "lat": 45.265088,
        "lon": -72.144862,
        "display_name": "CENTRE DE SANT\u00c9 ET DE SERVICES SOCIAUX DE MEMPHR\u00c9MAGOG, Magog, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX LAFL\u00c8CHE",
      "value": {
        "lat": 46.606386,
        "lon": -72.707386,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX LAFL\u00c8CHE, Shawinigan, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL D'AMOS",
      "value": {
        "lat": 48.574532,
        "lon": -78.125459,
        "display_name": "H\u00d4PITAL D'AMOS, Amos, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE SAINT-GEORGES",
      "value": {
        "lat": 46.109716,
        "lon": -70.685194,
        "display_name": "H\u00d4PITAL DE SAINT-GEORGES, Saint-Georges, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL SAINT-FRAN\u00c7OIS D'ASSISE",
      "value": {
        "lat": 46.828441,
        "lon": -71.237547,
        "display_name": "H\u00d4PITAL SAINT-FRAN\u00c7OIS D'ASSISE, Qu\u00e9bec City, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE FORTIERVILLE",
      "value": {
        "lat": 46.486357,
        "lon": -72.030378,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE FORTIERVILLE, Fortierville, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL, CLSC ET CENTRE D'H\u00c9BERGEMENT D'ASBESTOS",
      "value": {
        "lat": 45.771765,
        "lon": -71.926081,
        "display_name": "H\u00d4PITAL, CLSC ET CENTRE D'H\u00c9BERGEMENT D'ASBESTOS, Asbestos, Quebec"
      }
    },
    {
      "label": "CENTRE DE SANT\u00c9 ET DE SERVICES SOCIAUX DE LA MRC-DE-COATICOOK",
      "value": {
        "lat": 45.134979,
        "lon": -71.812335,
        "display_name": "CENTRE DE SANT\u00c9 ET DE SERVICES SOCIAUX DE LA MRC-DE-COATICOOK, Coaticook, Quebec"
      }
    },
    {
      "label": "CLSC DE SENNETERRE",
      "value": {
        "lat": 48.384388,
        "lon": -77.252997,
        "display_name": "CLSC DE SENNETERRE, Senneterre, Quebec"
      }
    },
    {
      "label": "CLSC, HOPITAL ET CENTRE D'HEBERGEMENT CHRIST-ROI",
      "value": {
        "lat": 46.810782,
        "lon": -71.258207,
        "display_name": "CLSC, HOPITAL ET CENTRE D'HEBERGEMENT CHRIST-ROI, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX CHRIST-ROI",
      "value": {
        "lat": 46.23147,
        "lon": -72.626501,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX CHRIST-ROI, Nicolet, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE BAIE-SAINT-PAUL",
      "value": {
        "lat": 47.439825,
        "lon": -70.51209,
        "display_name": "H\u00d4PITAL DE BAIE-SAINT-PAUL, Baie-Saint-Paul, Quebec"
      }
    },
    {
      "label": "INSTITUT NATIONAL DE PSYCHIATRIE L\u00c9GALE PHILIPPE-PINEL",
      "value": {
        "lat": 45.656057,
        "lon": -73.533616,
        "display_name": "INSTITUT NATIONAL DE PSYCHIATRIE L\u00c9GALE PHILIPPE-PINEL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX CLOUTIER",
      "value": {
        "lat": 46.365267,
        "lon": -72.504983,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX CLOUTIER, Trois-Rivi\u00e8res, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE SOINS PSYCHIATRIQUES CRAWFORD",
      "value": {
        "lat": 45.439396,
        "lon": -73.58144,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE SOINS PSYCHIATRIQUES CRAWFORD, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL R\u00c9GIONAL DE PORTNEUF CLSC DE SAINT-RAYMOND",
      "value": {
        "lat": 46.894933,
        "lon": -71.822153,
        "display_name": "H\u00d4PITAL R\u00c9GIONAL DE PORTNEUF CLSC DE SAINT-RAYMOND, Saint-Raymond, Quebec"
      }
    },
    {
      "label": "CENTRE DE SANT\u00c9 ET DE SERVICES SOCIAUX DU GRANIT",
      "value": {
        "lat": 45.588594,
        "lon": -70.905791,
        "display_name": "CENTRE DE SANT\u00c9 ET DE SERVICES SOCIAUX DU GRANIT, Lac-M\u00e9gantic, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL CHAUVEAU",
      "value": {
        "lat": 46.853199,
        "lon": -71.369963,
        "display_name": "H\u00d4PITAL CHAUVEAU, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE SAINTE-ANNE-DE-BEAUPR\u00c9",
      "value": {
        "lat": 47.04274,
        "lon": -70.900195,
        "display_name": "H\u00d4PITAL DE SAINTE-ANNE-DE-BEAUPR\u00c9, Beaupr\u00e9, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL PIERRE-BOUCHER",
      "value": {
        "lat": 45.5383,
        "lon": -73.458792,
        "display_name": "H\u00d4PITAL PIERRE-BOUCHER, Longueuil, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE GATINEAU",
      "value": {
        "lat": 45.483271,
        "lon": -75.685748,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE GATINEAU, Gatineau, Quebec"
      }
    },
    {
      "label": "H\u00d4TEL-DIEU D'ARTHABASKA",
      "value": {
        "lat": 46.040622,
        "lon": -71.914983,
        "display_name": "H\u00d4TEL-DIEU D'ARTHABASKA, Victoriaville, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DU HAUT-RICHELIEU",
      "value": {
        "lat": 45.332523,
        "lon": -73.270212,
        "display_name": "H\u00d4PITAL DU HAUT-RICHELIEU, Saint-Jean-Sur-Richelieu, Quebec"
      }
    },
    {
      "label": "H\u00d4TEL-DIEU DE SOREL",
      "value": {
        "lat": 46.045811,
        "lon": -73.095633,
        "display_name": "H\u00d4TEL-DIEU DE SOREL, Sorel-Tracy, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ANNA-LABERGE",
      "value": {
        "lat": 45.345661,
        "lon": -73.763446,
        "display_name": "H\u00d4PITAL ANNA-LABERGE, Ch\u00e2teauguay, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE SOINS PSYCHIATRIQUES WELLINGTON",
      "value": {
        "lat": 45.456285,
        "lon": -73.567305,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE SOINS PSYCHIATRIQUES WELLINGTON, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE P\u00c9DOPSYCHIATRIE - R\u00c9SIDENCE DU SACR\u00c9-COEUR",
      "value": {
        "lat": 46.813282,
        "lon": -71.245535,
        "display_name": "CENTRE DE P\u00c9DOPSYCHIATRIE - R\u00c9SIDENCE DU SACR\u00c9-COEUR, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE PAPINEAU",
      "value": {
        "lat": 45.568529,
        "lon": -73.653602,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE PAPINEAU, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN P\u00c9DOPSYCHIATRIE DE L\u00c9VIS",
      "value": {
        "lat": 46.813008,
        "lon": -71.173657,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN P\u00c9DOPSYCHIATRIE DE L\u00c9VIS, L\u00e9vis, Quebec"
      }
    },
    {
      "label": "CLSC DE RIVI\u00c8RE-DES-PRAIRIES",
      "value": {
        "lat": 45.644779,
        "lon": -73.585977,
        "display_name": "CLSC DE RIVI\u00c8RE-DES-PRAIRIES, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE PARC-EXTENSION",
      "value": {
        "lat": 45.529597,
        "lon": -73.621043,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE PARC-EXTENSION, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX CLAUDE-DAVID",
      "value": {
        "lat": 45.718801,
        "lon": -73.475579,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX CLAUDE-DAVID, Repentigny, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX AVELLIN-DALCOURT",
      "value": {
        "lat": 46.254591,
        "lon": -72.928988,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX AVELLIN-DALCOURT, Louiseville, Quebec"
      }
    },
    {
      "label": "POINT DE SERVICE DE T\u00c9MISCAMING-ET-DE-KIPAWA",
      "value": {
        "lat": 46.725735,
        "lon": -79.094112,
        "display_name": "POINT DE SERVICE DE T\u00c9MISCAMING-ET-DE-KIPAWA, T\u00e9miscaming, Quebec"
      }
    },
    {
      "label": "CENTRE DE SANTE INUULITSIVIK",
      "value": {
        "lat": 60.03765,
        "lon": -77.275795,
        "display_name": "CENTRE DE SANTE INUULITSIVIK, Puvirnituq, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE REN\u00c9-LAENNEC",
      "value": {
        "lat": 45.608722,
        "lon": -73.720252,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE REN\u00c9-LAENNEC, Laval, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE SOINS PSYCHIATRIQUES DE MERCIER-OUEST",
      "value": {
        "lat": 45.584868,
        "lon": -73.541394,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE SOINS PSYCHIATRIQUES DE MERCIER-OUEST, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "PROGRAMME DE RECHERCHE CLINIQUE CHUM-IRCM",
      "value": {
        "lat": 45.513448,
        "lon": -73.576203,
        "display_name": "PROGRAMME DE RECHERCHE CLINIQUE CHUM-IRCM, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE R\u00c9ADAPTATION LINDSAY",
      "value": {
        "lat": 45.507064,
        "lon": -73.629478,
        "display_name": "H\u00d4PITAL DE R\u00c9ADAPTATION LINDSAY, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE MONT-LAURIER",
      "value": {
        "lat": 46.556419,
        "lon": -75.494855,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE MONT-LAURIER, Mont-Laurier, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE LAURIER",
      "value": {
        "lat": 46.765936,
        "lon": -71.289344,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE LAURIER, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE SAINT-CHARLES-BORROM\u00c9E",
      "value": {
        "lat": 46.040318,
        "lon": -73.453708,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE SAINT-CHARLES-BORROM\u00c9E, Saint-Charles-Borrom\u00e9e, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN P\u00c9DOPSYCHIATRIE DE REPENTIGNY",
      "value": {
        "lat": 45.739686,
        "lon": -73.446173,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN P\u00c9DOPSYCHIATRIE DE REPENTIGNY, Repentigny, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL G\u00c9N\u00c9RAL JUIF",
      "value": {
        "lat": 45.495761,
        "lon": -73.630634,
        "display_name": "H\u00d4PITAL G\u00c9N\u00c9RAL JUIF, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE HOSPITALIER UNIVERSITAIRE SAINTE-JUSTINE",
      "value": {
        "lat": 45.501148,
        "lon": -73.626124,
        "display_name": "CENTRE HOSPITALIER UNIVERSITAIRE SAINTE-JUSTINE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "PAVILLON FERNAND-S\u00c9GUIN",
      "value": {
        "lat": 45.586219,
        "lon": -73.527287,
        "display_name": "PAVILLON FERNAND-S\u00c9GUIN, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE SEPT-\u00ceLES",
      "value": {
        "lat": 50.211092,
        "lon": -66.382832,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE SEPT-\u00ceLES, Sept-\u00celes, Quebec"
      }
    },
    {
      "label": "CLSC - URGENCE-MINEURE - CENTRE D'H\u00c9BERGEMENT DE WINDSOR",
      "value": {
        "lat": 45.570842,
        "lon": -72.004985,
        "display_name": "CLSC - URGENCE-MINEURE - CENTRE D'H\u00c9BERGEMENT DE WINDSOR, Windsor, Quebec"
      }
    },
    {
      "label": "CLINIQUE MEDICALE DE SQUATEC",
      "value": {
        "lat": 47.88281,
        "lon": -68.719667,
        "display_name": "CLINIQUE MEDICALE DE SQUATEC, Saint-Michel-Du-Squatec, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL D'AMQUI",
      "value": {
        "lat": 48.468477,
        "lon": -67.419325,
        "display_name": "H\u00d4PITAL D'AMQUI, Amqui, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE DRUMMONDVILLE",
      "value": {
        "lat": 45.840985,
        "lon": -72.436283,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE DRUMMONDVILLE, Drummondville, Quebec"
      }
    },
    {
      "label": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE C\u00d4TE-DES-NEIGES",
      "value": {
        "lat": 45.498159,
        "lon": -73.627307,
        "display_name": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE C\u00d4TE-DES-NEIGES, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE M\u00c9TRO",
      "value": {
        "lat": 45.494557,
        "lon": -73.581027,
        "display_name": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE M\u00c9TRO, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CLSC DE SAINT-L\u00c9ONARD",
      "value": {
        "lat": 45.585253,
        "lon": -73.589922,
        "display_name": "CLSC DE SAINT-L\u00c9ONARD, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CLSC DE HOCHELAGA-MAISONNEUVE",
      "value": {
        "lat": 45.551349,
        "lon": -73.540867,
        "display_name": "CLSC DE HOCHELAGA-MAISONNEUVE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CLSC OLIVIER-GUIMOND",
      "value": {
        "lat": 45.575021,
        "lon": -73.547504,
        "display_name": "CLSC OLIVIER-GUIMOND, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CLSC DE L'EST-DE-MONTR\u00c9AL",
      "value": {
        "lat": 45.666433,
        "lon": -73.493581,
        "display_name": "CLSC DE L'EST-DE-MONTR\u00c9AL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE LA MALBAIE",
      "value": {
        "lat": 47.65619,
        "lon": -70.151741,
        "display_name": "H\u00d4PITAL DE LA MALBAIE, La Malbaie, Quebec"
      }
    },
    {
      "label": "CLSC ET H\u00d4PITAL LE ROYER",
      "value": {
        "lat": 49.190176,
        "lon": -68.252525,
        "display_name": "CLSC ET H\u00d4PITAL LE ROYER, Baie-Comeau, Quebec"
      }
    },
    {
      "label": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE SAINT-HUBERT",
      "value": {
        "lat": 45.492843,
        "lon": -73.403274,
        "display_name": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE SAINT-HUBERT, Longueuil, Quebec"
      }
    },
    {
      "label": "CLSC DE MERCIER-EST",
      "value": {
        "lat": 45.611666,
        "lon": -73.526628,
        "display_name": "CLSC DE MERCIER-EST, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CLSC DE LA VISITATION ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DES FAUBOURGS",
      "value": {
        "lat": 45.521116,
        "lon": -73.558864,
        "display_name": "CLSC DE LA VISITATION ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DES FAUBOURGS, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE SHAWINIGAN-SUD",
      "value": {
        "lat": 46.524396,
        "lon": -72.744274,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE SHAWINIGAN-SUD, Shawinigan, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ET CLSC DE SEPT-\u00ceLES",
      "value": {
        "lat": 50.209826,
        "lon": -66.383983,
        "display_name": "H\u00d4PITAL ET CLSC DE SEPT-\u00ceLES, Sept-\u00celes, Quebec"
      }
    },
    {
      "label": "CLSC DE SAINT-MICHEL",
      "value": {
        "lat": 45.565598,
        "lon": -73.608292,
        "display_name": "CLSC DE SAINT-MICHEL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CLSC DE ROSEMONT",
      "value": {
        "lat": 45.542519,
        "lon": -73.562078,
        "display_name": "CLSC DE ROSEMONT, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE ET CENTRE DE SERVICES AMBULATOIRES EN P\u00c9DIATRIE DE L\u0092OUTAOUAIS",
      "value": {
        "lat": 45.493306,
        "lon": -75.688671,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE ET CENTRE DE SERVICES AMBULATOIRES EN P\u00c9DIATRIE DE L\u0092OUTAOUAIS, Gatineau, Quebec"
      }
    },
    {
      "label": "CLSC ET CENTRE DE SERVICES AMBULATOIRES EN P\u00c9DOPSYCHIATRIE DE LA RUE MARY",
      "value": {
        "lat": 45.652514,
        "lon": -74.339578,
        "display_name": "CLSC ET CENTRE DE SERVICES AMBULATOIRES EN P\u00c9DOPSYCHIATRIE DE LA RUE MARY, Lachute, Quebec"
      }
    },
    {
      "label": "CLSC ET CENTRE DE SERVICES AMBULATOIRES DE VAUDREUIL-DORION",
      "value": {
        "lat": 45.393902,
        "lon": -74.053925,
        "display_name": "CLSC ET CENTRE DE SERVICES AMBULATOIRES DE VAUDREUIL-DORION, Vaudreuil-Dorion, Quebec"
      }
    },
    {
      "label": "CLSC SAINTE-CATHERINE ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DES FAUBOURGS",
      "value": {
        "lat": 45.510483,
        "lon": -73.562663,
        "display_name": "CLSC SAINTE-CATHERINE ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DES FAUBOURGS, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CLSC ET CENTRE DE SERVICES AMBULATOIRES BELV\u00c9D\u00c8RE",
      "value": {
        "lat": 45.38997,
        "lon": -71.896494,
        "display_name": "CLSC ET CENTRE DE SERVICES AMBULATOIRES BELV\u00c9D\u00c8RE, Sherbrooke, Quebec"
      }
    },
    {
      "label": "CLSC ET CENTRE DE SERVICES AMBULATOIRES CHOMEDEY",
      "value": {
        "lat": 45.544488,
        "lon": -73.740988,
        "display_name": "CLSC ET CENTRE DE SERVICES AMBULATOIRES CHOMEDEY, Laval, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE JOUR - PAVILLON MARCEL D'AMOUR",
      "value": {
        "lat": 45.424847,
        "lon": -75.740641,
        "display_name": "H\u00d4PITAL DE JOUR - PAVILLON MARCEL D'AMOUR, Gatineau, Quebec"
      }
    },
    {
      "label": "CLSC PARTHENAIS ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DES FAUBOURGS",
      "value": {
        "lat": 45.531013,
        "lon": -73.560069,
        "display_name": "CLSC PARTHENAIS ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DES FAUBOURGS, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE MAIZERETS",
      "value": {
        "lat": 46.843684,
        "lon": -71.218317,
        "display_name": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE MAIZERETS, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE SPEID",
      "value": {
        "lat": 45.369833,
        "lon": -71.858418,
        "display_name": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE SPEID, Sherbrooke, Quebec"
      }
    },
    {
      "label": "CLSC DU VILLAGE-OLYMPIQUE",
      "value": {
        "lat": 45.568953,
        "lon": -73.554179,
        "display_name": "CLSC DU VILLAGE-OLYMPIQUE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE BORDEAUX-CARTIERVILLE",
      "value": {
        "lat": 45.540815,
        "lon": -73.689342,
        "display_name": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE BORDEAUX-CARTIERVILLE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES ET MAISON DE NAISSANCE LOUVAIN",
      "value": {
        "lat": 45.548516,
        "lon": -73.654072,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES ET MAISON DE NAISSANCE LOUVAIN, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "INSTITUT UNIVERSITAIRE EN SANT\u00c9 MENTALE DE QU\u00c9BEC",
      "value": {
        "lat": 46.847669,
        "lon": -71.220504,
        "display_name": "INSTITUT UNIVERSITAIRE EN SANT\u00c9 MENTALE DE QU\u00c9BEC, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE SOINS PSYCHIATRIQUES DE L'EST-DE-MONTR\u00c9AL",
      "value": {
        "lat": 45.588619,
        "lon": -73.529047,
        "display_name": "H\u00d4PITAL DE SOINS PSYCHIATRIQUES DE L'EST-DE-MONTR\u00c9AL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ET CENTRE DE R\u00c9ADAPTATION DE JONQUI\u00c8RE",
      "value": {
        "lat": 48.413598,
        "lon": -71.235131,
        "display_name": "H\u00d4PITAL ET CENTRE DE R\u00c9ADAPTATION DE JONQUI\u00c8RE, Saguenay, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE ROUYN-NORANDA",
      "value": {
        "lat": 48.243843,
        "lon": -79.02063,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE ROUYN-NORANDA, Rouyn-Noranda, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES CORBEIL",
      "value": {
        "lat": 45.451014,
        "lon": -75.750888,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES CORBEIL, Gatineau, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE LANAUDI\u00c8RE ET CENTRE D'H\u00c9BERGEMENT PARPHILIA-FERLAND",
      "value": {
        "lat": 46.039277,
        "lon": -73.457012,
        "display_name": "H\u00d4PITAL DE LANAUDI\u00c8RE ET CENTRE D'H\u00c9BERGEMENT PARPHILIA-FERLAND, Saint-Charles-Borrom\u00e9e, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX PAUL-GILBERT",
      "value": {
        "lat": 46.725358,
        "lon": -71.259356,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX PAUL-GILBERT, L\u00e9vis, Quebec"
      }
    },
    {
      "label": "CENTRE D'H\u00c9BERGEMENT DE L'H\u00d4TEL-DIEU-DE-SAINT-HYACINTHE",
      "value": {
        "lat": 45.62572,
        "lon": -72.950032,
        "display_name": "CENTRE D'H\u00c9BERGEMENT DE L'H\u00d4TEL-DIEU-DE-SAINT-HYACINTHE, Saint-Hyacinthe, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL G\u00c9N\u00c9RAL JUIF",
      "value": {
        "lat": 45.497811,
        "lon": -73.628806,
        "display_name": "H\u00d4PITAL G\u00c9N\u00c9RAL JUIF, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE HOSPITALIER DE ST. MARY",
      "value": {
        "lat": 45.495296,
        "lon": -73.624505,
        "display_name": "CENTRE HOSPITALIER DE ST. MARY, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL MONT SINA\u00cf",
      "value": {
        "lat": 45.473842,
        "lon": -73.657345,
        "display_name": "H\u00d4PITAL MONT SINA\u00cf, C\u00f4te-Saint-Luc, Quebec"
      }
    },
    {
      "label": "INSTITUT UNIVERSITAIRE DE G\u00c9RIATRIE DE MONTR\u00c9AL",
      "value": {
        "lat": 45.491031,
        "lon": -73.623817,
        "display_name": "INSTITUT UNIVERSITAIRE DE G\u00c9RIATRIE DE MONTR\u00c9AL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "PAVILLON CENTRE HOSPITALIER DE L'UNIVERSIT\u00c9 LAVAL",
      "value": {
        "lat": 46.767873,
        "lon": -71.282342,
        "display_name": "PAVILLON CENTRE HOSPITALIER DE L'UNIVERSIT\u00c9 LAVAL, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ET CHSLD D'YOUVILLE",
      "value": {
        "lat": 45.390667,
        "lon": -71.8951,
        "display_name": "H\u00d4PITAL ET CHSLD D'YOUVILLE, Sherbrooke, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL CHARLES-LE MOYNE",
      "value": {
        "lat": 45.497266,
        "lon": -73.486423,
        "display_name": "H\u00d4PITAL CHARLES-LE MOYNE, Longueuil, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES POUR LES A\u00ceN\u00c9S DE SAINT-LAMBERT",
      "value": {
        "lat": 45.498311,
        "lon": -73.503619,
        "display_name": "CENTRE DE SERVICES POUR LES A\u00ceN\u00c9S DE SAINT-LAMBERT, Saint-Lambert, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE DOLBEAU-MISTASSINI",
      "value": {
        "lat": 48.885835,
        "lon": -72.239367,
        "display_name": "H\u00d4PITAL DE DOLBEAU-MISTASSINI, Dolbeau-Mistassini, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ET CHSLD DU PONTIAC",
      "value": {
        "lat": 45.605968,
        "lon": -76.484009,
        "display_name": "H\u00d4PITAL ET CHSLD DU PONTIAC, Shawville, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ET CENTRE D'H\u00c9BERGEMENT EN SANT\u00c9 MENTALE DE LA MAURICIE-ET-DU-CENTRE-DU-QU\u00c9BEC",
      "value": {
        "lat": 46.553033,
        "lon": -72.747145,
        "display_name": "H\u00d4PITAL ET CENTRE D'H\u00c9BERGEMENT EN SANT\u00c9 MENTALE DE LA MAURICIE-ET-DU-CENTRE-DU-QU\u00c9BEC, Shawinigan, Quebec"
      }
    },
    {
      "label": "CENTRE D'H\u00c9BERGEMENT DU MANOIR-DE-L'\u00c2GE-D'OR",
      "value": {
        "lat": 45.509456,
        "lon": -73.571944,
        "display_name": "CENTRE D'H\u00c9BERGEMENT DU MANOIR-DE-L'\u00c2GE-D'OR, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE D'H\u00c9BERGEMENT MGR-ROSS DE GASP\u00c9",
      "value": {
        "lat": 48.837318,
        "lon": -64.492379,
        "display_name": "CENTRE D'H\u00c9BERGEMENT MGR-ROSS DE GASP\u00c9, Gasp\u00e9, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE LA BAIE",
      "value": {
        "lat": 48.343909,
        "lon": -70.883162,
        "display_name": "H\u00d4PITAL DE LA BAIE, Saguenay, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE SAINTE-ANNE-DES-MONTS",
      "value": {
        "lat": 49.11883,
        "lon": -66.482453,
        "display_name": "H\u00d4PITAL DE SAINTE-ANNE-DES-MONTS, Sainte-Anne-Des-Monts, Quebec"
      }
    },
    {
      "label": "CENTRE D'H\u00c9BERGEMENT J.-HENRI-CHARBONNEAU",
      "value": {
        "lat": 45.542654,
        "lon": -73.558801,
        "display_name": "CENTRE D'H\u00c9BERGEMENT J.-HENRI-CHARBONNEAU, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE LASALLE",
      "value": {
        "lat": 45.420839,
        "lon": -73.623371,
        "display_name": "H\u00d4PITAL DE LASALLE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE L'ENFANT-J\u00c9SUS",
      "value": {
        "lat": 46.837203,
        "lon": -71.225495,
        "display_name": "H\u00d4PITAL DE L'ENFANT-J\u00c9SUS, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL LAURENTIEN",
      "value": {
        "lat": 46.05517,
        "lon": -74.288947,
        "display_name": "H\u00d4PITAL LAURENTIEN, Sainte-Agathe-Des-Monts, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ET CHSLD ARGYLL",
      "value": {
        "lat": 45.404242,
        "lon": -71.915088,
        "display_name": "H\u00d4PITAL ET CHSLD ARGYLL, Sherbrooke, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE CHANDLER",
      "value": {
        "lat": 48.354823,
        "lon": -64.67168,
        "display_name": "H\u00d4PITAL DE CHANDLER, Chandler, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL R\u00c9GIONAL DE RIMOUSKI",
      "value": {
        "lat": 48.447043,
        "lon": -68.530496,
        "display_name": "H\u00d4PITAL R\u00c9GIONAL DE RIMOUSKI, Rimouski, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE GRANBY",
      "value": {
        "lat": 45.410592,
        "lon": -72.722956,
        "display_name": "H\u00d4PITAL DE GRANBY, Granby, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ET CENTRE D'H\u00c9BERGEMENT DE ROBERVAL",
      "value": {
        "lat": 48.507731,
        "lon": -72.218987,
        "display_name": "H\u00d4PITAL ET CENTRE D'H\u00c9BERGEMENT DE ROBERVAL, Roberval, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL G\u00c9N\u00c9RAL DU LAKESHORE",
      "value": {
        "lat": 45.44855,
        "lon": -73.833668,
        "display_name": "H\u00d4PITAL G\u00c9N\u00c9RAL DU LAKESHORE, Pointe-Claire, Quebec"
      }
    },
    {
      "label": "CENTRE D'H\u00c9BERGEMENT NOTRE-DAME-DE-LA-MERCI",
      "value": {
        "lat": 45.547601,
        "lon": -73.687656,
        "display_name": "CENTRE D'H\u00c9BERGEMENT NOTRE-DAME-DE-LA-MERCI, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ET CHSLD M\u00c9MORIAL DE WAKEFIELD / WAKEFIELD MEMORIAL HOSPITAL",
      "value": {
        "lat": 45.648575,
        "lon": -75.932482,
        "display_name": "H\u00d4PITAL ET CHSLD M\u00c9MORIAL DE WAKEFIELD / WAKEFIELD MEMORIAL HOSPITAL, La P\u00eache, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ET CHSLD DE PAPINEAU",
      "value": {
        "lat": 45.588572,
        "lon": -75.411481,
        "display_name": "H\u00d4PITAL ET CHSLD DE PAPINEAU, Gatineau, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL EN SANT\u00c9 MENTALE PIERRE-JANET",
      "value": {
        "lat": 45.425294,
        "lon": -75.73993,
        "display_name": "H\u00d4PITAL EN SANT\u00c9 MENTALE PIERRE-JANET, Gatineau, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE ROUYN-NORANDA",
      "value": {
        "lat": 48.243809,
        "lon": -79.019318,
        "display_name": "H\u00d4PITAL DE ROUYN-NORANDA, Rouyn-Noranda, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DU SURO\u00ceT",
      "value": {
        "lat": 45.250926,
        "lon": -74.130708,
        "display_name": "H\u00d4PITAL DU SURO\u00ceT, Salaberry-De-Valleyfield, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL BROME-MISSISQUOI-PERKINS",
      "value": {
        "lat": 45.207084,
        "lon": -72.714415,
        "display_name": "H\u00d4PITAL BROME-MISSISQUOI-PERKINS, Cowansville, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL HONOR\u00c9-MERCIER",
      "value": {
        "lat": 45.634833,
        "lon": -72.959476,
        "display_name": "H\u00d4PITAL HONOR\u00c9-MERCIER, Saint-Hyacinthe, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL JEFFERY HALE",
      "value": {
        "lat": 46.796649,
        "lon": -71.253086,
        "display_name": "H\u00d4PITAL JEFFERY HALE, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "CENTRE D'H\u00c9BERGEMENT DU MANOIR-TRINIT\u00c9",
      "value": {
        "lat": 45.53539,
        "lon": -73.459423,
        "display_name": "CENTRE D'H\u00c9BERGEMENT DU MANOIR-TRINIT\u00c9, Longueuil, Quebec"
      }
    },
    {
      "label": "PAVILLON ROSEMONT",
      "value": {
        "lat": 45.577463,
        "lon": -73.562116,
        "display_name": "PAVILLON ROSEMONT, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL SAINTE-ANNE",
      "value": {
        "lat": 45.412428,
        "lon": -73.948743,
        "display_name": "H\u00d4PITAL SAINTE-ANNE, Sainte-Anne-De-Bellevue, Quebec"
      }
    },
    {
      "label": "CENTRE HOSPITALIER KATERI MEMORIAL TEHSAKOTITSEN : THA",
      "value": {
        "lat": 45.415478,
        "lon": -73.682869,
        "display_name": "CENTRE HOSPITALIER KATERI MEMORIAL TEHSAKOTITSEN : THA, Kahnawake, Quebec"
      }
    },
    {
      "label": "CENTRE HOSPITALIER R\u00c9GIONAL DU GRAND-PORTAGE",
      "value": {
        "lat": 47.818479,
        "lon": -69.539923,
        "display_name": "CENTRE HOSPITALIER R\u00c9GIONAL DU GRAND-PORTAGE, Rivi\u00e8re-Du-Loup, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL CATHERINE-BOOTH",
      "value": {
        "lat": 45.463935,
        "lon": -73.635565,
        "display_name": "H\u00d4PITAL CATHERINE-BOOTH, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CHU SAINTE-JUSTINE",
      "value": {
        "lat": 45.503155,
        "lon": -73.624943,
        "display_name": "CHU SAINTE-JUSTINE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ET CENTRE DE R\u00c9ADAPTATION EN D\u00c9PENDANCE DE VAL-D'OR",
      "value": {
        "lat": 48.096081,
        "lon": -77.796833,
        "display_name": "H\u00d4PITAL ET CENTRE DE R\u00c9ADAPTATION EN D\u00c9PENDANCE DE VAL-D'OR, Val-D'Or, Quebec"
      }
    },
    {
      "label": "INSTITUT DE R\u00c9ADAPTATION DE MONTR\u00c9AL",
      "value": {
        "lat": 45.508074,
        "lon": -73.628776,
        "display_name": "INSTITUT DE R\u00c9ADAPTATION DE MONTR\u00c9AL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES ET INSTITUT NAZARETH ET LOUIS-BRAILLE DU S\u00c9MINAIRE NORD",
      "value": {
        "lat": 45.311353,
        "lon": -73.263707,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES ET INSTITUT NAZARETH ET LOUIS-BRAILLE DU S\u00c9MINAIRE NORD, Saint-Jean-Sur-Richelieu, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES ET INSTITUT NAZARETH ET LOUIS-BRAILLE SAINT-CHARLES OUEST",
      "value": {
        "lat": 45.526375,
        "lon": -73.51979,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES ET INSTITUT NAZARETH ET LOUIS-BRAILLE SAINT-CHARLES OUEST, Longueuil, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE ET DE R\u00c9ADAPTATION EN D\u00c9PENDANCE DE CHARLEMAGNE",
      "value": {
        "lat": 45.721116,
        "lon": -73.48962,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE ET DE R\u00c9ADAPTATION EN D\u00c9PENDANCE DE CHARLEMAGNE, Charlemagne, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ET CENTRE DE R\u00c9ADAPTATION EN D\u00c9FICIENCE PHYSIQUE DE MONTMAGNY",
      "value": {
        "lat": 46.976408,
        "lon": -70.596699,
        "display_name": "H\u00d4PITAL ET CENTRE DE R\u00c9ADAPTATION EN D\u00c9FICIENCE PHYSIQUE DE MONTMAGNY, Montmagny, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL ET CENTRE DE R\u00c9ADAPTATION EN D\u00c9FICIENCE PHYSIQUE DE THETFORD MINES",
      "value": {
        "lat": 46.109613,
        "lon": -71.278245,
        "display_name": "H\u00d4PITAL ET CENTRE DE R\u00c9ADAPTATION EN D\u00c9FICIENCE PHYSIQUE DE THETFORD MINES, Thetford Mines, Quebec"
      }
    },
    {
      "label": "UNIT\u00c9 DE CONFINEMENT COMMUNAUTAIRE",
      "value": {
        "lat": 45.385799,
        "lon": -71.919276,
        "display_name": "UNIT\u00c9 DE CONFINEMENT COMMUNAUTAIRE, Sherbrooke, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN G\u00c9RONTOPSYCHIATRIE GRENET",
      "value": {
        "lat": 45.529865,
        "lon": -73.713846,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN G\u00c9RONTOPSYCHIATRIE GRENET, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE SAINT-VALLIER",
      "value": {
        "lat": 46.812109,
        "lon": -71.239125,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE SAINT-VALLIER, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE QUATRE-BOURGEOIS",
      "value": {
        "lat": 46.778594,
        "lon": -71.294723,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE QUATRE-BOURGEOIS, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE JARDINS-ROUSSILLON",
      "value": {
        "lat": 45.344176,
        "lon": -73.764139,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE JARDINS-ROUSSILLON, Ch\u00e2teauguay, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE DRUMMONDVILLE",
      "value": {
        "lat": 45.87618,
        "lon": -72.481981,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE DRUMMONDVILLE, Drummondville, Quebec"
      }
    },
    {
      "label": "SITE GLEN",
      "value": {
        "lat": 45.473377,
        "lon": -73.600886,
        "display_name": "SITE GLEN, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE MAISONNEUVE",
      "value": {
        "lat": 45.473392,
        "lon": -73.604551,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE MAISONNEUVE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE DIALYSE DE LA RUE DE GASP\u00c9",
      "value": {
        "lat": 45.527525,
        "lon": -73.596368,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE DIALYSE DE LA RUE DE GASP\u00c9, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE LA POMMERAIE",
      "value": {
        "lat": 45.191278,
        "lon": -72.753468,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE LA POMMERAIE, Cowansville, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL SHRINERS POUR ENFANTS (QU\u00c9BEC)",
      "value": {
        "lat": 45.471774,
        "lon": -73.602,
        "display_name": "H\u00d4PITAL SHRINERS POUR ENFANTS (QU\u00c9BEC), Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES BOIS-DE-BOULOGNE",
      "value": {
        "lat": 45.537592,
        "lon": -73.679729,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES BOIS-DE-BOULOGNE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE NOTRE-DAME",
      "value": {
        "lat": 45.530985,
        "lon": -73.562554,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE NOTRE-DAME, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE SAINTE-TH\u00c9R\u00c8SE",
      "value": {
        "lat": 45.638023,
        "lon": -73.841581,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE SAINTE-TH\u00c9R\u00c8SE, Sainte-Th\u00e9r\u00e8se, Quebec"
      }
    },
    {
      "label": "CLSC DE POHENEGAMOOK",
      "value": {
        "lat": 47.489759,
        "lon": -69.281334,
        "display_name": "CLSC DE POHENEGAMOOK, Poh\u00e9n\u00e9gamook, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE DEUX-MONTAGNES-MIRABEL-SUD",
      "value": {
        "lat": 45.568803,
        "lon": -73.887892,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE DEUX-MONTAGNES-MIRABEL-SUD, Saint-Eustache, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE SAINT-EUSTACHE",
      "value": {
        "lat": 45.570495,
        "lon": -73.920792,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE SAINT-EUSTACHE, Saint-Eustache, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE DEUX-MONTAGNES-MIRABEL-SUD",
      "value": {
        "lat": 45.571719,
        "lon": -73.916223,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE DEUX-MONTAGNES-MIRABEL-SUD, Saint-Eustache, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL SANTA CABRINI",
      "value": {
        "lat": 45.580138,
        "lon": -73.571719,
        "display_name": "H\u00d4PITAL SANTA CABRINI, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE L\u00c9VIS",
      "value": {
        "lat": 46.735394,
        "lon": -71.263486,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE L\u00c9VIS, L\u00e9vis, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES JEAN-JACQUES-GAUTHIER",
      "value": {
        "lat": 45.52539,
        "lon": -73.711071,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES JEAN-JACQUES-GAUTHIER, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE RICHELIEU-YAMASKA",
      "value": {
        "lat": 45.636793,
        "lon": -72.960114,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE RICHELIEU-YAMASKA, Saint-Hyacinthe, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX D'ARGENTEUIL",
      "value": {
        "lat": 45.661917,
        "lon": -74.352065,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX D'ARGENTEUIL, Lachute, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE SACR\u00c9-C\u008cUR",
      "value": {
        "lat": 45.537592,
        "lon": -73.679729,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE SACR\u00c9-C\u008cUR, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE VERDUN",
      "value": {
        "lat": 45.464099,
        "lon": -73.563988,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE VERDUN, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE LA VALL\u00c9E-DE-L\u0092OR",
      "value": {
        "lat": 48.095326,
        "lon": -77.795626,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE LA VALL\u00c9E-DE-L\u0092OR, Val-D'Or, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE CHARLES-LE MOYNE",
      "value": {
        "lat": 45.493596,
        "lon": -73.502877,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE CHARLES-LE MOYNE, Saint-Lambert, Quebec"
      }
    },
    {
      "label": "CLSC DE PASPEBIAC",
      "value": {
        "lat": 48.021953,
        "lon": -65.286756,
        "display_name": "CLSC DE PASPEBIAC, Pasp\u00e9biac, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE SAINT-JEAN-SUR-RICHELIEU",
      "value": {
        "lat": 45.340041,
        "lon": -73.284159,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE SAINT-JEAN-SUR-RICHELIEU, Saint-Jean-Sur-Richelieu, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE ET CENTRE DE SERVICES AMBULATOIRES DE ST. MARY",
      "value": {
        "lat": 45.494995,
        "lon": -73.623776,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE ET CENTRE DE SERVICES AMBULATOIRES DE ST. MARY, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE HOSPITALIER DE L'UNIVERSIT\u00c9 DE MONTR\u00c9AL",
      "value": {
        "lat": 45.511757,
        "lon": -73.556331,
        "display_name": "CENTRE HOSPITALIER DE L'UNIVERSIT\u00c9 DE MONTR\u00c9AL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL NOTRE-DAME",
      "value": {
        "lat": 45.525358,
        "lon": -73.56356,
        "display_name": "H\u00d4PITAL NOTRE-DAME, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SANT\u00c9 ET DE SERVICES SOCIAUX DE LA MITIS",
      "value": {
        "lat": 48.572404,
        "lon": -68.216178,
        "display_name": "CENTRE DE SANT\u00c9 ET DE SERVICES SOCIAUX DE LA MITIS, Mont-Joli, Quebec"
      }
    },
    {
      "label": "PAVILLON \u00c9DOUARD-ASSELIN",
      "value": {
        "lat": 45.51112,
        "lon": -73.558615,
        "display_name": "PAVILLON \u00c9DOUARD-ASSELIN, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE RECHERCHE DU CENTRE HOSPITALIER DE L'UNIVERSIT\u00c9 DE MONTR\u00c9AL",
      "value": {
        "lat": 45.510839,
        "lon": -73.555946,
        "display_name": "CENTRE DE RECHERCHE DU CENTRE HOSPITALIER DE L'UNIVERSIT\u00c9 DE MONTR\u00c9AL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE LONGUEUIL",
      "value": {
        "lat": 45.522746,
        "lon": -73.520547,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE LONGUEUIL, Longueuil, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE SAINT-EUSTACHE",
      "value": {
        "lat": 45.560744,
        "lon": -73.93114,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE SAINT-EUSTACHE, Saint-Eustache, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE GREENFIELD PARK",
      "value": {
        "lat": 45.481884,
        "lon": -73.46582,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE GREENFIELD PARK, Longueuil, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE BOISBRIAND",
      "value": {
        "lat": 45.6416,
        "lon": -73.868094,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE BOISBRIAND, Boisbriand, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES DE LA RUE BEAUREGARD",
      "value": {
        "lat": 45.510476,
        "lon": -73.487304,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES DE LA RUE BEAUREGARD, Longueuil, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE LA RUE LABONT\u00c9",
      "value": {
        "lat": 45.533971,
        "lon": -73.511279,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE LA RUE LABONT\u00c9, Longueuil, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DU BOULEVARD TASCHEREAU",
      "value": {
        "lat": 45.499939,
        "lon": -73.487651,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DU BOULEVARD TASCHEREAU, Longueuil, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL NOTRE-DAME-DE-FATIMA",
      "value": {
        "lat": 47.37183,
        "lon": -70.026167,
        "display_name": "H\u00d4PITAL NOTRE-DAME-DE-FATIMA, La Pocati\u00e8re, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE FLEURY",
      "value": {
        "lat": 45.5739,
        "lon": -73.648518,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE FLEURY, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CLSC DE GRANDE-VALL\u00c9E",
      "value": {
        "lat": 49.227333,
        "lon": -65.10462,
        "display_name": "CLSC DE GRANDE-VALL\u00c9E, Grande-Vall\u00e9e, Quebec"
      }
    },
    {
      "label": "CLSC DE MURDOCHVILLE",
      "value": {
        "lat": 48.961323,
        "lon": -65.493545,
        "display_name": "CLSC DE MURDOCHVILLE, Murdochville, Quebec"
      }
    },
    {
      "label": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE MANICOUAGAN ET CLSC LIONEL-CHAREST",
      "value": {
        "lat": 49.20892,
        "lon": -68.237917,
        "display_name": "GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE MANICOUAGAN ET CLSC LIONEL-CHAREST, Baie-Comeau, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE L'AVENUE VICTORIA",
      "value": {
        "lat": 45.489868,
        "lon": -73.492465,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE L'AVENUE VICTORIA, Longueuil, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL CHARLES-LEMOYNE - CONSULTATIONS EXTERNES",
      "value": {
        "lat": 45.446466,
        "lon": -73.439355,
        "display_name": "H\u00d4PITAL CHARLES-LEMOYNE - CONSULTATIONS EXTERNES, Brossard, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL CHARLES-LEMOYNE - SERVICES DE PSYCHIATRIE",
      "value": {
        "lat": 45.524424,
        "lon": -73.514401,
        "display_name": "H\u00d4PITAL CHARLES-LEMOYNE - SERVICES DE PSYCHIATRIE, Longueuil, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DE NOTRE-DAME-DU-LAC",
      "value": {
        "lat": 47.612369,
        "lon": -68.799268,
        "display_name": "H\u00d4PITAL DE NOTRE-DAME-DU-LAC, T\u00e9miscouata-Sur-Le-Lac, Quebec"
      }
    },
    {
      "label": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE RIMOUSKI",
      "value": {
        "lat": 48.454832,
        "lon": -68.521711,
        "display_name": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE RIMOUSKI, Rimouski, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL COURTE DUR\u00c9E PLACE DUPUIS",
      "value": {
        "lat": 45.515895,
        "lon": -73.559147,
        "display_name": "H\u00d4PITAL COURTE DUR\u00c9E PLACE DUPUIS, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES SNT TEMPORAIRE DAYS INN BLAINVILLE",
      "value": {
        "lat": 45.679937,
        "lon": -73.888899,
        "display_name": "CENTRE DE SERVICES SNT TEMPORAIRE DAYS INN BLAINVILLE, Blainville, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL JUIF DE R\u00c9ADAPTATION",
      "value": {
        "lat": 45.54873,
        "lon": -73.737641,
        "display_name": "H\u00d4PITAL JUIF DE R\u00c9ADAPTATION, Laval, Quebec"
      }
    },
    {
      "label": "H\u00d4TEL QUALITY SUITES",
      "value": {
        "lat": 45.567892,
        "lon": -73.740145,
        "display_name": "H\u00d4TEL QUALITY SUITES, Laval, Quebec"
      }
    },
    {
      "label": "LE COUVENT",
      "value": {
        "lat": 45.536191,
        "lon": -73.732909,
        "display_name": "LE COUVENT, Laval, Quebec"
      }
    },
    {
      "label": "CLSC DE SAINT-MARC-DES-CARRIERES",
      "value": {
        "lat": 46.68089,
        "lon": -72.049697,
        "display_name": "CLSC DE SAINT-MARC-DES-CARRIERES, Saint-Marc-Des-Carri\u00e8res, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL CHARLES-LE MOYNE - CLINIQUE EXTERNE DE P\u00c9DIATRIE",
      "value": {
        "lat": 45.498643,
        "lon": -73.486909,
        "display_name": "H\u00d4PITAL CHARLES-LE MOYNE - CLINIQUE EXTERNE DE P\u00c9DIATRIE, Longueuil, Quebec"
      }
    },
    {
      "label": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE KING EST",
      "value": {
        "lat": 45.408073,
        "lon": -71.862061,
        "display_name": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE KING EST, Sherbrooke, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES DE SANT\u00c9 POUR LES PERSONNES SANS DOMICILE FIXE DE SAINT-JEAN-SUR-RICHELIEU",
      "value": {
        "lat": 45.323782,
        "lon": -73.26436,
        "display_name": "CENTRE DE SERVICES DE SANT\u00c9 POUR LES PERSONNES SANS DOMICILE FIXE DE SAINT-JEAN-SUR-RICHELIEU, Saint-Jean-Sur-Richelieu, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES DE SANT\u00c9 POUR LES PERSONNES SANS DOMICILE FIXE DE LONGUEUIL",
      "value": {
        "lat": 45.496866,
        "lon": -73.483639,
        "display_name": "CENTRE DE SERVICES DE SANT\u00c9 POUR LES PERSONNES SANS DOMICILE FIXE DE LONGUEUIL, Longueuil, Quebec"
      }
    },
    {
      "label": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE LA HAUTE-VILLE",
      "value": {
        "lat": 46.806018,
        "lon": -71.227891,
        "display_name": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DE LA HAUTE-VILLE, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DU MARIGOT",
      "value": {
        "lat": 45.586916,
        "lon": -73.710152,
        "display_name": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE DU MARIGOT, Laval, Quebec"
      }
    },
    {
      "label": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE LAFONTAINE",
      "value": {
        "lat": 45.793045,
        "lon": -74.009352,
        "display_name": "CLSC ET GROUPE DE M\u00c9DECINE DE FAMILLE UNIVERSITAIRE LAFONTAINE, Saint-J\u00e9r\u00f4me, Quebec"
      }
    },
    {
      "label": "HOPITAL DE JOUR LE TREMPLIN",
      "value": {
        "lat": 45.443762,
        "lon": -73.579359,
        "display_name": "HOPITAL DE JOUR LE TREMPLIN, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "INSTITUT DE CARDIOLOGIE DE MONTR\u00c9AL",
      "value": {
        "lat": 45.573763,
        "lon": -73.577817,
        "display_name": "INSTITUT DE CARDIOLOGIE DE MONTR\u00c9AL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL PSYCHIATRIQUE DE MALARTIC",
      "value": {
        "lat": 48.141509,
        "lon": -78.12841,
        "display_name": "H\u00d4PITAL PSYCHIATRIQUE DE MALARTIC, Malartic, Quebec"
      }
    },
    {
      "label": "CDC SMDI DE L'ARM\u00c9E DU SALUT",
      "value": {
        "lat": 46.814758,
        "lon": -71.211407,
        "display_name": "CDC SMDI DE L'ARM\u00c9E DU SALUT, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "H\u00d4TEL LE CONCORDE QU\u00c9BEC & UNILOFTS GRANDE-ALL\u00c9E",
      "value": {
        "lat": 46.805321,
        "lon": -71.217231,
        "display_name": "H\u00d4TEL LE CONCORDE QU\u00c9BEC & UNILOFTS GRANDE-ALL\u00c9E, Qu\u00e9bec, Quebec"
      }
    },
    {
      "label": "SNT - UNIT\u00c9 LA R\u00c9SIDENCE DES B\u00c2TISSEURS \u00c0 SEPT-\u00ceLES",
      "value": {
        "lat": 50.20573,
        "lon": -66.387189,
        "display_name": "SNT - UNIT\u00c9 LA R\u00c9SIDENCE DES B\u00c2TISSEURS \u00c0 SEPT-\u00ceLES, Sept-\u00celes, Quebec"
      }
    },
    {
      "label": "SNT - UNIT\u00c9 LE CH\u00c2TEAU \u00c0 BAIE-COMEAU",
      "value": {
        "lat": 49.186579,
        "lon": -68.268136,
        "display_name": "SNT - UNIT\u00c9 LE CH\u00c2TEAU \u00c0 BAIE-COMEAU, Baie-Comeau, Quebec"
      }
    },
    {
      "label": "SNT - MAISON D'AIDE ET D'H\u00c9BERGEMENT DE FERMONT",
      "value": {
        "lat": 52.79464,
        "lon": -67.093606,
        "display_name": "SNT - MAISON D'AIDE ET D'H\u00c9BERGEMENT DE FERMONT, Fermont, Quebec"
      }
    },
    {
      "label": "SNT - H\u00d4PITAL DE LASALLE - AR\u00c9NA JACQUES LEMAIRE",
      "value": {
        "lat": 45.418481,
        "lon": -73.622524,
        "display_name": "SNT - H\u00d4PITAL DE LASALLE - AR\u00c9NA JACQUES LEMAIRE, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE DE R\u00c9ADAPTATION EN D\u00c9FICIENCE INTELLECTUELLE, TROUBLE DU SPECTRE DE L'AUTISME ET EN D\u00c9FICIENCE PHYSIQUE TH\u00c9R\u00c8SE-MARTIN",
      "value": {
        "lat": 47.455067,
        "lon": -70.000724,
        "display_name": "CENTRE DE R\u00c9ADAPTATION EN D\u00c9FICIENCE INTELLECTUELLE, TROUBLE DU SPECTRE DE L'AUTISME ET EN D\u00c9FICIENCE PHYSIQUE TH\u00c9R\u00c8SE-MARTIN, Rivi\u00e8re-Ouelle, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL EN SANT\u00c9 MENTALE ALBERT-PR\u00c9VOST",
      "value": {
        "lat": 45.529026,
        "lon": -73.729041,
        "display_name": "H\u00d4PITAL EN SANT\u00c9 MENTALE ALBERT-PR\u00c9VOST, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL MARIE-CLARAC",
      "value": {
        "lat": 45.590837,
        "lon": -73.649742,
        "display_name": "H\u00d4PITAL MARIE-CLARAC, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE HOSPITALIER PIERRE-JANET",
      "value": {
        "lat": 45.462882,
        "lon": -75.749246,
        "display_name": "CENTRE HOSPITALIER PIERRE-JANET, Gatineau, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES PIERRE-JANET",
      "value": {
        "lat": 45.473478,
        "lon": -75.691923,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES PIERRE-JANET, Gatineau, Quebec"
      }
    },
    {
      "label": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE TROIS-RIVI\u00c8RES",
      "value": {
        "lat": 46.344521,
        "lon": -72.557607,
        "display_name": "CENTRE DE SERVICES AMBULATOIRES EN SANT\u00c9 MENTALE DE TROIS-RIVI\u00c8RES, Trois-Rivi\u00e8res, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL CHARLES-LE MOYNE - CLINIQUE SUIVI DE GROSSESSE",
      "value": {
        "lat": 45.497753,
        "lon": -73.48421,
        "display_name": "H\u00d4PITAL CHARLES-LE MOYNE - CLINIQUE SUIVI DE GROSSESSE, Longueuil, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DU HAUT-RICHELIEU - CLINIQUE SUIVI DE GROSSESSE",
      "value": {
        "lat": 45.338275,
        "lon": -73.267739,
        "display_name": "H\u00d4PITAL DU HAUT-RICHELIEU - CLINIQUE SUIVI DE GROSSESSE, Saint-Jean-Sur-Richelieu, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DU HAUT-RICHELIEU - CLINIQUE P\u00c9DIATRIQUE",
      "value": {
        "lat": 45.331302,
        "lon": -73.268157,
        "display_name": "H\u00d4PITAL DU HAUT-RICHELIEU - CLINIQUE P\u00c9DIATRIQUE, Saint-Jean-Sur-Richelieu, Quebec"
      }
    },
    {
      "label": "H\u00d4TEL QUALITY INN SUR LA RUE BELLEHUMEUR - CLIENT\u00c8LE JEUNESSE",
      "value": {
        "lat": 45.476867,
        "lon": -75.691274,
        "display_name": "H\u00d4TEL QUALITY INN SUR LA RUE BELLEHUMEUR - CLIENT\u00c8LE JEUNESSE, Gatineau, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX SAINT-JOSEPH",
      "value": {
        "lat": 46.347061,
        "lon": -72.546485,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX SAINT-JOSEPH, Trois-Rivi\u00e8res, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE PORT-CARTIER",
      "value": {
        "lat": 50.023783,
        "lon": -66.893964,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE PORT-CARTIER, Port-Cartier, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL DU SACR\u00c9-C\u008cUR DE MONTR\u00c9AL",
      "value": {
        "lat": 45.532578,
        "lon": -73.714036,
        "display_name": "H\u00d4PITAL DU SACR\u00c9-C\u008cUR DE MONTR\u00c9AL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "H\u00d4PITAL G\u00c9N\u00c9RAL DE MONTR\u00c9AL",
      "value": {
        "lat": 45.497046,
        "lon": -73.589036,
        "display_name": "H\u00d4PITAL G\u00c9N\u00c9RAL DE MONTR\u00c9AL, Montr\u00e9al, Quebec"
      }
    },
    {
      "label": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE LA BASSE-C\u00d4TE-NORD",
      "value": {
        "lat": 51.411577,
        "lon": -57.203155,
        "display_name": "CENTRE MULTISERVICES DE SANT\u00c9 ET DE SERVICES SOCIAUX DE LA BASSE-C\u00d4TE-NORD, Blanc-Sablon, Quebec"
      }
    }
  ],
  "Saskatchewan": [
    {
      "label": "All Nations' Healing Hospital",
      "value": {
        "lat": 50.761689,
        "lon": -103.787009,
        "display_name": "All Nations' Healing Hospital, Fort Quappelle, Saskatchewan"
      }
    },
    {
      "label": "Arcola Health Centre",
      "value": {
        "lat": 49.637818,
        "lon": -102.484603,
        "display_name": "Arcola Health Centre, Arcola, Saskatchewan"
      }
    },
    {
      "label": "Assiniboia Union Hospital",
      "value": {
        "lat": 49.628594,
        "lon": -105.983248,
        "display_name": "Assiniboia Union Hospital, Assiniboia, Saskatchewan"
      }
    },
    {
      "label": "Balcarres Integrated Care Centre",
      "value": {
        "lat": 50.803208,
        "lon": -103.550837,
        "display_name": "Balcarres Integrated Care Centre, Balcarres, Saskatchewan"
      }
    },
    {
      "label": "Battlefords Union Hospital",
      "value": {
        "lat": 52.771802,
        "lon": -108.288771,
        "display_name": "Battlefords Union Hospital, North Battleford, Saskatchewan"
      }
    },
    {
      "label": "Biggar and District Health Centre",
      "value": {
        "lat": 52.05738,
        "lon": -107.996219,
        "display_name": "Biggar and District Health Centre, Biggar, Saskatchewan"
      }
    },
    {
      "label": "Biggar Hospital",
      "value": {
        "lat": 52.056675,
        "lon": -107.996869,
        "display_name": "Biggar Hospital, Biggar, Saskatchewan"
      }
    },
    {
      "label": "Broadview Hospital",
      "value": {
        "lat": 50.373996,
        "lon": -102.584409,
        "display_name": "Broadview Hospital, Broadview, Saskatchewan"
      }
    },
    {
      "label": "Canora Hospital",
      "value": {
        "lat": 51.626261,
        "lon": -102.439565,
        "display_name": "Canora Hospital, Canora, Saskatchewan"
      }
    },
    {
      "label": "Carrot River Health Centre",
      "value": {
        "lat": 53.282556,
        "lon": -103.591844,
        "display_name": "Carrot River Health Centre, Carrot River, Saskatchewan"
      }
    },
    {
      "label": "Central Butte Regency Hospital",
      "value": {
        "lat": 50.799886,
        "lon": -106.50876,
        "display_name": "Central Butte Regency Hospital, Central Butte, Saskatchewan"
      }
    },
    {
      "label": "Cypress Regional Hospital",
      "value": {
        "lat": 50.311026,
        "lon": -107.775948,
        "display_name": "Cypress Regional Hospital, Swift Current, Saskatchewan"
      }
    },
    {
      "label": "Davidson Health Centre",
      "value": {
        "lat": 51.266611,
        "lon": -105.984471,
        "display_name": "Davidson Health Centre, Davidson, Saskatchewan"
      }
    },
    {
      "label": "Dinsmore Health Care Centre",
      "value": {
        "lat": 51.333416,
        "lon": -107.444463,
        "display_name": "Dinsmore Health Care Centre, Dinsmore, Saskatchewan"
      }
    },
    {
      "label": "Dr. f.h. Wigmore Regional Hospital",
      "value": {
        "lat": 50.419139,
        "lon": -105.525048,
        "display_name": "Dr. f.h. Wigmore Regional Hospital, Moose Jaw, Saskatchewan"
      }
    },
    {
      "label": "Herbert & District Integrated Health Facility",
      "value": {
        "lat": 50.426304,
        "lon": -107.218885,
        "display_name": "Herbert & District Integrated Health Facility, Herbert, Saskatchewan"
      }
    },
    {
      "label": "Hudson Bay Health Care Facility",
      "value": {
        "lat": 52.853926,
        "lon": -102.387622,
        "display_name": "Hudson Bay Health Care Facility, Hudson Bay, Saskatchewan"
      }
    },
    {
      "label": "Humboldt District Health Complex",
      "value": {
        "lat": 52.212496,
        "lon": -105.12106,
        "display_name": "Humboldt District Health Complex, Humboldt, Saskatchewan"
      }
    },
    {
      "label": "Indian Head Union Hospital",
      "value": {
        "lat": 50.536462,
        "lon": -103.678507,
        "display_name": "Indian Head Union Hospital, Indian Head, Saskatchewan"
      }
    },
    {
      "label": "Jim Pattison Children's Hospital",
      "value": {
        "lat": 52.131555,
        "lon": -106.64194,
        "display_name": "Jim Pattison Children's Hospital, Saskatoon, Saskatchewan"
      }
    },
    {
      "label": "Kamsack Hospital and Nursing Home",
      "value": {
        "lat": 51.556726,
        "lon": -101.887773,
        "display_name": "Kamsack Hospital and Nursing Home, Kamsack, Saskatchewan"
      }
    },
    {
      "label": "Kelvington Hospital",
      "value": {
        "lat": 52.158065,
        "lon": -103.526917,
        "display_name": "Kelvington Hospital, Kelvington, Saskatchewan"
      }
    },
    {
      "label": "Kerrobert Hospital",
      "value": {
        "lat": 51.913666,
        "lon": -109.131866,
        "display_name": "Kerrobert Hospital, Kerrobert, Saskatchewan"
      }
    },
    {
      "label": "Kerrobert Integrated Health Centre",
      "value": {
        "lat": 51.917673,
        "lon": -109.14045,
        "display_name": "Kerrobert Integrated Health Centre, Kerrobert, Saskatchewan"
      }
    },
    {
      "label": "Kindersley Hospital",
      "value": {
        "lat": 51.470908,
        "lon": -109.164454,
        "display_name": "Kindersley Hospital, Kindersley, Saskatchewan"
      }
    },
    {
      "label": "Kipling Integrated Health Centre",
      "value": {
        "lat": 50.101613,
        "lon": -102.641269,
        "display_name": "Kipling Integrated Health Centre, Kipling, Saskatchewan"
      }
    },
    {
      "label": "Kipling Memorial Health Centre",
      "value": {
        "lat": 50.102302,
        "lon": -102.63811,
        "display_name": "Kipling Memorial Health Centre, Kipling, Saskatchewan"
      }
    },
    {
      "label": "LA LOCHE HEALTH CENTRE",
      "value": {
        "lat": 56.491177,
        "lon": -109.450785,
        "display_name": "LA LOCHE HEALTH CENTRE, La Loche, Saskatchewan"
      }
    },
    {
      "label": "LA RONGE HEALTH CENTRE",
      "value": {
        "lat": 55.105254,
        "lon": -105.28969,
        "display_name": "LA RONGE HEALTH CENTRE, La Ronge, Saskatchewan"
      }
    },
    {
      "label": "Lake Health Centre & Special Care Home",
      "value": {
        "lat": 54.027538,
        "lon": -109.158882,
        "display_name": "Lake Health Centre & Special Care Home, Loon Lake, Saskatchewan"
      }
    },
    {
      "label": "Lanigan Hospital",
      "value": {
        "lat": 51.851472,
        "lon": -105.023947,
        "display_name": "Lanigan Hospital, Lanigan, Saskatchewan"
      }
    },
    {
      "label": "Leader and District Integrated Healthcare Facility",
      "value": {
        "lat": 50.890917,
        "lon": -109.541118,
        "display_name": "Leader and District Integrated Healthcare Facility, Leader, Saskatchewan"
      }
    },
    {
      "label": "Leader Hospital",
      "value": {
        "lat": 50.890964,
        "lon": -109.541368,
        "display_name": "Leader Hospital, Leader, Saskatchewan"
      }
    },
    {
      "label": "Lloydminster Hospital",
      "value": {
        "lat": 53.272631,
        "lon": -109.989527,
        "display_name": "Lloydminster Hospital, Lloydminster, Saskatchewan"
      }
    },
    {
      "label": "Maidstone Health Complex",
      "value": {
        "lat": 53.090537,
        "lon": -109.29367,
        "display_name": "Maidstone Health Complex, Maidstone, Saskatchewan"
      }
    },
    {
      "label": "Maple Creek Hospital",
      "value": {
        "lat": 49.90328,
        "lon": -109.49,
        "display_name": "Maple Creek Hospital, Maple Creek, Saskatchewan"
      }
    },
    {
      "label": "Melfort Hospital",
      "value": {
        "lat": 52.865784,
        "lon": -104.614632,
        "display_name": "Melfort Hospital, Melfort, Saskatchewan"
      }
    },
    {
      "label": "Moose Jaw Union Hospital",
      "value": {
        "lat": 50.39248,
        "lon": -105.524687,
        "display_name": "Moose Jaw Union Hospital, Moose Jaw, Saskatchewan"
      }
    },
    {
      "label": "Nipawin Health Care Facility",
      "value": {
        "lat": 53.356182,
        "lon": -104.004036,
        "display_name": "Nipawin Health Care Facility, Nipawin, Saskatchewan"
      }
    },
    {
      "label": "Nipawin Hospital",
      "value": {
        "lat": 53.355955,
        "lon": -104.00388,
        "display_name": "Nipawin Hospital, Nipawin, Saskatchewan"
      }
    },
    {
      "label": "Meadow Lake Hospital",
      "value": {
        "lat": 54.123569,
        "lon": -108.434736,
        "display_name": "Meadow Lake Hospital, Meadow Lake, Saskatchewan"
      }
    },
    {
      "label": "Outlook Hospital",
      "value": {
        "lat": 51.483632,
        "lon": -107.062979,
        "display_name": "Outlook Hospital, Outlook, Saskatchewan"
      }
    },
    {
      "label": "Pasqua Hospital",
      "value": {
        "lat": 50.454433,
        "lon": -104.638463,
        "display_name": "Pasqua Hospital, Regina, Saskatchewan"
      }
    },
    {
      "label": "Pineview Hospital",
      "value": {
        "lat": 53.191545,
        "lon": -105.786266,
        "display_name": "Pineview Hospital, Prince Albert, Saskatchewan"
      }
    },
    {
      "label": "Porcupine Carragana Hospital",
      "value": {
        "lat": 52.596679,
        "lon": -103.262613,
        "display_name": "Porcupine Carragana Hospital, Porcupine Plain, Saskatchewan"
      }
    },
    {
      "label": "Radville Marian Health Centre",
      "value": {
        "lat": 49.46414,
        "lon": -104.305331,
        "display_name": "Radville Marian Health Centre, Radville, Saskatchewan"
      }
    },
    {
      "label": "Redvers Health Centre",
      "value": {
        "lat": 49.572789,
        "lon": -101.694417,
        "display_name": "Redvers Health Centre, Redvers, Saskatchewan"
      }
    },
    {
      "label": "Regina General Hospital",
      "value": {
        "lat": 50.443965,
        "lon": -104.600994,
        "display_name": "Regina General Hospital, Regina, Saskatchewan"
      }
    },
    {
      "label": "Regional Psychiatric Centre (Saskatoon)",
      "value": {
        "lat": 52.161772,
        "lon": -106.602866,
        "display_name": "Regional Psychiatric Centre (Saskatoon), Saskatoon, Saskatchewan"
      }
    },
    {
      "label": "Riverside Health Complex",
      "value": {
        "lat": 53.388917,
        "lon": -108.972809,
        "display_name": "Riverside Health Complex, Turtleford, Saskatchewan"
      }
    },
    {
      "label": "Rosetown and District Health Centre",
      "value": {
        "lat": 51.551089,
        "lon": -107.997869,
        "display_name": "Rosetown and District Health Centre, Rosetown, Saskatchewan"
      }
    },
    {
      "label": "Rosthern Hospital",
      "value": {
        "lat": 52.666581,
        "lon": -106.333266,
        "display_name": "Rosthern Hospital, Rosthern, Saskatchewan"
      }
    },
    {
      "label": "Royal University Hospital (Ruh)",
      "value": {
        "lat": 52.130843,
        "lon": -106.641547,
        "display_name": "Royal University Hospital (Ruh), Saskatoon, Saskatchewan"
      }
    },
    {
      "label": "Saskatchewan Hospital",
      "value": {
        "lat": 52.740533,
        "lon": -108.265676,
        "display_name": "Saskatchewan Hospital, North Battleford, Saskatchewan"
      }
    },
    {
      "label": "Saskatchewan Hospital - North Battleford",
      "value": {
        "lat": 52.740568,
        "lon": -108.265385,
        "display_name": "Saskatchewan Hospital - North Battleford, North Battleford, Saskatchewan"
      }
    },
    {
      "label": "Saskatoon City Hospital",
      "value": {
        "lat": 52.13643,
        "lon": -106.653915,
        "display_name": "Saskatoon City Hospital, Saskatoon, Saskatchewan"
      }
    },
    {
      "label": "Shaunavon Hospital and Care Centre",
      "value": {
        "lat": 49.651473,
        "lon": -108.404857,
        "display_name": "Shaunavon Hospital and Care Centre, Shaunavon, Saskatchewan"
      }
    },
    {
      "label": "Shellbrook Hospital",
      "value": {
        "lat": 53.218535,
        "lon": -106.401225,
        "display_name": "Shellbrook Hospital, Shellbrook, Saskatchewan"
      }
    },
    {
      "label": "Southeast Integrated Care Centre \u0096 Moosomin",
      "value": {
        "lat": 50.136107,
        "lon": -101.656361,
        "display_name": "Southeast Integrated Care Centre \u0096 Moosomin, Moosomin, Saskatchewan"
      }
    },
    {
      "label": "St. Anthony's Hospital",
      "value": {
        "lat": 50.650487,
        "lon": -102.084143,
        "display_name": "St. Anthony's Hospital, Esterhazy, Saskatchewan"
      }
    },
    {
      "label": "ST. JOSEPH'S HEALTH CENTRE (\u00ceLE DE LA CROSSE)",
      "value": {
        "lat": 55.445653,
        "lon": -107.899584,
        "display_name": "ST. JOSEPH'S HEALTH CENTRE (\u00ceLE DE LA CROSSE), \u00cele-\u00c0-La-Crosse, Saskatchewan"
      }
    },
    {
      "label": "St. Joseph's Hospital",
      "value": {
        "lat": 49.152536,
        "lon": -103.012175,
        "display_name": "St. Joseph's Hospital, Estevan, Saskatchewan"
      }
    },
    {
      "label": "St. Joseph's Hospital - Gravelbourg",
      "value": {
        "lat": 49.874277,
        "lon": -106.562923,
        "display_name": "St. Joseph's Hospital - Gravelbourg, Gravelbourg, Saskatchewan"
      }
    },
    {
      "label": "St. Joseph's Integrated Care Centre",
      "value": {
        "lat": 51.314224,
        "lon": -103.98292,
        "display_name": "St. Joseph's Integrated Care Centre, Lestock, Saskatchewan"
      }
    },
    {
      "label": "St. Paul's Hospital",
      "value": {
        "lat": 52.126313,
        "lon": -106.696366,
        "display_name": "St. Paul's Hospital, Saskatoon, Saskatchewan"
      }
    },
    {
      "label": "St. Peters Hospital",
      "value": {
        "lat": 50.93768,
        "lon": -102.820511,
        "display_name": "St. Peters Hospital, Melville, Saskatchewan"
      }
    },
    {
      "label": "Tisdale Hospital",
      "value": {
        "lat": 52.856825,
        "lon": -104.054939,
        "display_name": "Tisdale Hospital, Tisdale, Saskatchewan"
      }
    },
    {
      "label": "Unity & District Health Centre",
      "value": {
        "lat": 52.442736,
        "lon": -109.173493,
        "display_name": "Unity & District Health Centre, Unity, Saskatchewan"
      }
    },
    {
      "label": "Unity and District Health Centre",
      "value": {
        "lat": 52.442896,
        "lon": -109.172852,
        "display_name": "Unity and District Health Centre, Unity, Saskatchewan"
      }
    },
    {
      "label": "Victoria Hospital",
      "value": {
        "lat": 53.192095,
        "lon": -105.784059,
        "display_name": "Victoria Hospital, Prince Albert, Saskatchewan"
      }
    },
    {
      "label": "Wadena Hospital",
      "value": {
        "lat": 51.95192,
        "lon": -103.794314,
        "display_name": "Wadena Hospital, Wadena, Saskatchewan"
      }
    },
    {
      "label": "Wakaw Health Centre",
      "value": {
        "lat": 52.650934,
        "lon": -105.742114,
        "display_name": "Wakaw Health Centre, Wakaw, Saskatchewan"
      }
    },
    {
      "label": "Wascana Rehabilitation Centre",
      "value": {
        "lat": 50.42519,
        "lon": -104.611062,
        "display_name": "Wascana Rehabilitation Centre, Regina, Saskatchewan"
      }
    },
    {
      "label": "Watrous District Health Complex",
      "value": {
        "lat": 51.674001,
        "lon": -105.455652,
        "display_name": "Watrous District Health Complex, Watrous, Saskatchewan"
      }
    },
    {
      "label": "Wawota Memorial Health Centre",
      "value": {
        "lat": 49.906002,
        "lon": -102.022331,
        "display_name": "Wawota Memorial Health Centre, Wawota, Saskatchewan"
      }
    },
    {
      "label": "Weyburn Community Health Services (Mental Health)",
      "value": {
        "lat": 49.674985,
        "lon": -103.871885,
        "display_name": "Weyburn Community Health Services (Mental Health), Weyburn, Saskatchewan"
      }
    },
    {
      "label": "Weyburn General Hospital",
      "value": {
        "lat": 49.668899,
        "lon": -103.853095,
        "display_name": "Weyburn General Hospital, Weyburn, Saskatchewan"
      }
    },
    {
      "label": "Wilkie and District Health Centre",
      "value": {
        "lat": 52.405556,
        "lon": -108.701125,
        "display_name": "Wilkie and District Health Centre, Wilkie, Saskatchewan"
      }
    },
    {
      "label": "Wolseley Memorial Integrated Health Centre",
      "value": {
        "lat": 50.426631,
        "lon": -103.268527,
        "display_name": "Wolseley Memorial Integrated Health Centre, Wolseley, Saskatchewan"
      }
    },
    {
      "label": "Wynyard Hospital",
      "value": {
        "lat": 51.767501,
        "lon": -104.167621,
        "display_name": "Wynyard Hospital, Wynyard, Saskatchewan"
      }
    },
    {
      "label": "Yorkton Regional Health Centre",
      "value": {
        "lat": 51.202246,
        "lon": -102.480612,
        "display_name": "Yorkton Regional Health Centre, Yorkton, Saskatchewan"
      }
    }
  ],
  "Yukon": [
    {
      "label": "Dawson City Community Hospital",
      "value": {
        "lat": 64.05664,
        "lon": -139.434,
        "display_name": "Dawson City Community Hospital, Dawson City, Yukon"
      }
    },
    {
      "label": "Watson Lake Community Hospital",
      "value": {
        "lat": 60.07049,
        "lon": -128.71,
        "display_name": "Watson Lake Community Hospital, Watson Lake, Yukon"
      }
    },
    {
      "label": "Whitehorse General Hospital",
      "value": {
        "lat": 60.71926,
        "lon": -135.044,
        "display_name": "Whitehorse General Hospital, Whitehorse, Yukon"
      }
    }
  ]
};