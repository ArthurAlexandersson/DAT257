const dropDownRegion = [
    { value: 'Whole world', label: 'Whole world', lat: '57.9', lng: '12.5' },
    { value: 'Afghanistan', label: 'Afghanistan', lng: '67.709953', lat: '33.93911' },
    { value: 'Albania', label: 'Albania', lng: '20.168331', lat: '41.153332' },
    { value: 'Algeria', label: 'Algeria', lng: '2.617323', lat: '28.158938' },
    { value: 'Andorra', label: 'Andorra', lng: '1.601554', lat: '42.546245' },
    { value: 'Angola', label: 'Angola', lng: '17.873887', lat: '-11.202692' },
    { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda', lng: '-61.796428', lat: '17.060816' },
    { value: 'Argentina', label: 'Argentina', lng: '-63.616672', lat: '-38.416097' },
    { value: 'Armenia', label: 'Armenia', lng: '45.038189', lat: '40.069099' },
    { value: 'Australia', label: 'Australia', lng: '133.775136', lat: '-25.274398' },
    { value: 'Austria', label: 'Austria', lng: '14.550072', lat: '47.516231' },
    { value: 'Azerbaijan', label: 'Azerbaijan', lng: '47.576927', lat: '40.143105' },
    { value: 'Bahamas', label: 'Bahamas', lng: '-77.39627999999999', lat: '25.03428' },
    { value: 'Bahrain', label: 'Bahrain', lng: '50.534449', lat: '26.0667' },
    { value: 'Bangladesh', label: 'Bangladesh', lng: '90.356331', lat: '23.684994' },
    { value: 'Barbados', label: 'Barbados', lng: '-59.543198', lat: '13.193887' },
    { value: 'Belarus', label: 'Belarus', lng: '27.953389', lat: '53.709807' },
    { value: 'Belgium', label: 'Belgium', lng: '4.469936', lat: '50.503887' },
    { value: 'Belize', label: 'Belize', lng: '-88.49765', lat: '17.189877' },
    { value: 'Benin', label: 'Benin', lng: '2.315834', lat: '9.30769' },
    { value: 'Bermuda', label: 'Bermuda', lng: '-64.7505', lat: '32.3078' },
    { value: 'Bhutan', label: 'Bhutan', lng: '90.433601', lat: '27.514162' },
    { value: 'Bolivia', label: 'Bolivia', lng: '-63.58865299999999', lat: '-16.290154' },
    { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina', lat: '43.915886', lng: '17.679076' },
    { value: 'Botswana', label: 'Botswana', lat: '-22.328474', lng: '24.684866' },
    { value: 'Brazil', label: 'Brazil', lat: '-14.235004', lng: '-51.925282' },
    { value: 'British Virgin Islands', label: 'British Virgin Islands', lat: '18.420695', lng: '-64.639968' },
    { value: 'Brunei Darussalam', label: 'Brunei Darussalam', lat: '4.535277', lng: '114.727669' },
    { value: 'Bulgaria', label: 'Bulgaria', lat: '42.733883', lng: '25.48583' },
    { value: 'Burkina Faso', label: 'Burkina Faso', lat: '12.238333', lng: '-1.561593' },
    { value: 'Burundi', label: 'Burundi', lat: '-3.373056', lng: '29.918886' },
    { value: 'Cambodia', label: 'Cambodia', lat: '12.565679', lng: '104.990963' },
    { value: 'Cameroon', label: 'Cameroon', lat: '7.369722', lng: '12.354722' },
    { value: 'Canada', label: 'Canada', lat: '56.130366', lng: '-106.346771' },
    { value: 'Cape Verde', label: 'Cape Verde', lat: '15.120142', lng: '-23.605172' },
    { value: 'Cayman Islands', label: 'Cayman Islands', lat: '19.513469', lng: '-80.566956' },
    { value: 'Central African Republic', label: 'Central African Republic', lat: '6.611111', lng: '20.939444' },
    { value: 'Chad', label: 'Chad', lat: '15.454166', lng: '18.732207' },
    { value: 'Chile', label: 'Chile', lat: '-35.675147', lng: '-71.542969' },
    { value: 'China', label: 'China', lat: '35.86166', lng: '104.195397' },
    { value: 'Colombia', label: 'Colombia', lat: '4.570868', lng: '-74.297333' },
    { value: 'Comoros', label: 'Comoros', lat: '-11.875001', lng: '43.872219' },
    { value: 'Costa Rica', label: 'Costa Rica', lat: '9.748917', lng: '-83.753428' },
    { value: 'Cote d Ivoire', label: 'Cote d Ivoire', lat: '7.539989', lng: '-5.54708' },
    { value: 'Croatia', label: 'Croatia', lat: '45.1', lng: '15.2' },
    { value: 'Cuba', label: 'Cuba', lng: '-79.0', lat: '21.5' },
    { value: 'Curaçao', label: 'Curaçao', lng: '-68.9', lat: '12.2' },
    { value: 'Cyprus', label: 'Cyprus', lng: '33.4', lat: '35.1' },
    { value: 'Czech Republic', label: 'Czech Republic', lng: '15.5', lat: '49.8' },
    { value: 'Democratic Republic of the Congo', label: 'Democratic Republic of the Congo', lng: '23.7', lat: '-3.9' },
    { value: 'Dem Rep Korea', label: 'North Korea', lng: '127.5', lat: '40.0' },
    { value: 'Denmark', label: 'Denmark', lng: '9.5', lat: '56.3' },
    { value: 'Djibouti', label: 'Djibouti', lng: '42.6', lat: '11.8' },
    { value: 'Dominica', label: 'Dominica', lng: '-61.4', lat: '15.4' },
    { value: 'Dominican Republic', label: 'Dominican Republic', lng: '-70.2', lat: '18.7' },
    { value: 'Ecuador', label: 'Ecuador', lng: '-78.2', lat: '-1.8' },
    { value: 'Egypt', label: 'Egypt', lng: '30.8', lat: '26.8' },
    { value: 'El Salvador', label: 'El Salvador', lng: '-88.9', lat: '13.7' },
    { value: 'Equatorial Guinea', label: 'Equatorial Guinea', lng: '10.3', lat: '1.6' },
    { value: 'Eritrea', label: 'Eritrea', lng: '39.0', lat: '15.2' },
    { value: 'Estonia', label: 'Estonia', lng: '25.0', lat: '58.6' },
    { value: 'Ethiopia', label: 'Ethiopia', lng: '40.5', lat: '9.1' },
    { value: 'Falkland Islands', label: 'Falkland Islands (Malvinas)', lng: '-59.4', lat: '-51.8' },
    { value: 'Fiji', label: 'Fiji', lng: '178.1', lat: '-17.7' },
    { value: 'Finland', label: 'Finland', lng: '25.7', lat: '64.0' },
    { value: 'France', label: 'France', lng: '2.2', lat: '46.2' },
    { value: 'French Guiana', label: 'French Guiana', lng: '-53.1', lat: '3.9' },
    { value: 'French Polynesia', label: 'French Polynesia', lng: '-149.4', lat: '-17.6' },
    { value: 'French Southern and Antarctic Lands', label: 'French Southern and Antarctic Lands', lng: '69.2', lat: '-49.3' },
    { value: "Gabon", label: "Gabon", lng: "11.788628", lat: "-0.586041" },
    { value: "Georgia", label: "Georgia", lng: "43.356892", lat: "42.315407" },
    { value: "Germany", label: "Germany", lng: "10.451526", lat: "51.165691" },
    { value: "Ghana", label: "Ghana", lng: "-1.023194", lat: "7.946527" },
    { value: "Greece", label: "Greece", lng: "21.824312", lat: "39.074208" },
    { value: "Greenland", label: "Greenland", lng: "-42.604303", lat: "71.706936" },
    { value: "Guadeloupe", label: "Guadeloupe", lng: "-61.576857", lat: "16.249135" },
    { value: "Guam", label: "Guam", lng: "144.793731", lat: "13.444304" },
    { value: "Guatemala", label: "Guatemala", lng: "-90.230759", lat: "15.783471" },
    { value: "Guinea-Bissau", label: "Guinea-Bissau", lng: "-15.180413", lat: "11.803749" },
    { value: "Guinea", label: "Guinea", lng: "-9.696645", lat: "9.945587" },
    { value: "Guyana", label: "Guyana", lng: "-58.93018", lat: "4.856471" },
    { value: "Haiti", label: "Haiti", lng: "-72.285215", lat: "18.971187" },
    { value: "Heard Island and McDonald Islands", label: "Heard Island and McDonald Islands", lng: "73.508888", lat: "-53.087867" },
    { value: "Honduras", label: "Honduras", lng: "-86.241905", lat: "15.199999" },
    { value: "Hong Kong", label: "Hong Kong", lng: "114.109497", lat: "22.396428" },
    { value: "Hungary", label: "Hungary", lng: "19.395591", lat: "47.162494" },
    { value: "Iceland", label: "Iceland", lng: "-19.020835", lat: "64.963051" },
    { value: "India", label: "India", lng: "78.96288", lat: "20.593684" },
    { value: "Indonesia", label: "Indonesia", lng: "113.921327", lat: "-0.789275" },
    { value: "Iran", label: "Iran", lng: "53.688046", lat: "32.427908" },
    { value: "Iraq", label: "Iraq", lng: "43.743531", lat: "33.223191" },
    { value: "Ireland", label: "Ireland", lng: "-8.24389", lat: "53.41291" },
    { value: "Israel", label: "Israel", lng: "34.851612", lat: "31.046051" },
    { value: "Italy", label: "Italy", lng: "12.56738", lat: "41.87194" },
    { value: "Jamaica", label: "Jamaica", lng: "-77.297508", lat: "18.109581" },
    { value: "Japan", label: "Japan", lng: "139.839478", lat: "35.652832" },
    { value: "Jordan", label: "Jordan", lng: "36.238414", lat: "30.585164" },
    { value: "Kazakhstan", label: "Kazakhstan", lng: "66.923684", lat: "48.019573" },
    { value: "Kenya", label: "Kenya", lng: "37.906193", lat: "-0.023559" },
    { value: "Kiribati", label: "Kiribati", lng: "-157.363130", lat: "1.870883" },
    { value: "Kosovo", label: "Kosovo", lng: "20.902977", lat: "42.602636" },
    { value: "Kuwait", label: "Kuwait", lng: "47.481766", lat: "29.31166" },
    { value: "Kyrgyzstan", label: "Kyrgyzstan", lng: "74.766098", lat: "41.20438" },
    { value: "Lao PDR", label: "Lao PDR", lng: "102.495496", lat: "19.85627" },
    { value: "Latvia", label: "Latvia", lng: "24.603189", lat: "56.879635" },
    { value: "Lebanon", label: "Lebanon", lng: "35.880165", lat: "33.92371" },
    { value: "Lesotho", label: "Lesotho", lng: "28.233608", lat: "-29.609988" },
    { value: "Liberia", label: "Liberia", lng: "-9.429499", lat: "6.428055" },
    { value: "Libya", label: "Libya", lng: "17.228331", lat: "26.3351" },
    { value: "Liechtenstein", label: "Liechtenstein", lng: "9.555373", lat: "47.166" },
    { value: "Lithuania", label: "Lithuania", lng: "23.881275", lat: "55.169438" },
    { value: "Luxembourg", label: "Luxembourg", lng: "6.129583", lat: "49.815273" },
    { value: "Macedonia", label: "Macedonia", lng: "21.745275", lat: "41.608635" },
    { value: "Madagascar", label: "Madagascar", lng: "46.869107", lat: "-18.766947" },
    { value: "Malawi", label: "Malawi", lng: "34.301525", lat: "-13.254308" },
    { value: "Malaysia", label: "Malaysia", lng: "101.975766", lat: "4.210484" },
    { value: 'Maldives', label: 'Maldives', lng: '73.2207', lat: '3.2028' },
    { value: 'Mali', label: 'Mali', lng: '-3.9962', lat: '17.5707' },
    { value: 'Malta', label: 'Malta', lng: '14.3754', lat: '35.9375' },
    { value: 'Marshall Islands', label: 'Marshall Islands', lng: '168.7302', lat: '7.1315' },
    { value: 'Martinique', label: 'Martinique', lng: '-61.0242', lat: '14.6415' },
    { value: 'Mauritania', label: 'Mauritania', lng: '-10.9408', lat: '20.4648' },
    { value: 'Mauritius', label: 'Mauritius', lng: '57.5522', lat: '-20.3484' },
    { value: 'Mexico', label: 'Mexico', lng: '-102.5528', lat: '23.6345' },
    { value: 'Micronesia', label: 'Micronesia', lng: '158.2151', lat: '6.8874' },
    { value: 'Moldova', label: 'Moldova', lng: '28.3699', lat: '47.4116' },
    { value: 'Monaco', label: 'Monaco', lng: '7.4128', lat: '43.7384' },
    { value: 'Mongolia', label: 'Mongolia', lng: '103.8467', lat: '46.8625' },
    { value: 'Montenegro', label: 'Montenegro', lng: '19.3744', lat: '42.7087' },
    { value: 'Montserrat', label: 'Montserrat', lng: '-62.1874', lat: '16.7425' },
    { value: 'Morocco', label: 'Morocco', lng: '-7.0926', lat: '31.7917' },
    { value: 'Mozambique', label: 'Mozambique', lng: '35.5333', lat: '-18.6657' },
    { value: 'Myanmar', label: 'Myanmar', lng: '96.1993', lat: '21.9162' },
    { value: 'Namibia', label: 'Namibia', lng: '18.4904', lat: '-22.9576' },
    { value: 'Nauru', label: 'Nauru', lng: '166.9315', lat: '-0.5228' },
    { value: 'Nepal', label: 'Nepal', lng: '84.1240', lat: '28.3949' },
    { value: 'Netherlands', label: 'Netherlands', lng: '5.2913', lat: '52.1326' },
    { value: 'New Caledonia', label: 'New Caledonia', lng: '165.6180', lat: '-20.9043' },
    { value: 'New Zealand', label: 'New Zealand', lng: '174.8859', lat: '-40.9006' },
    { value: 'Nicaragua', label: 'Nicaragua', lng: "-85.207229", lat: "12.865416" },
    { value: 'Niger', label: 'Niger', lng: "8.081666", lat: "17.607789" },
    { value: 'Nigeria', label: 'Nigeria', lng: "8.675277", lat: "9.081999" },
    { value: 'Northern Mariana Islands', label: 'Northern Mariana Islands', lng: "145.723404", lat: "15.0979" },
    { value: 'Norway', label: 'Norway', lng: "8.468946", lat: "60.472023" },
    { value: 'Oman', label: 'Oman', lng: "55.923255", lat: "21.512583" },
    { value: 'Pakistan', label: 'Pakistan', lng: "69.345116", lat: "30.375321" },
    { value: 'Palau', label: 'Palau', lng: "134.58252", lat: "7.51498" },
    { value: 'Palestine', label: 'Palestine', lng: "35.233154", lat: "31.952162" },
    { value: 'Panama', label: 'Panama', lng: "-80.782127", lat: "8.537981" },
    { value: 'Papua New Guinea', label: 'Papua New Guinea', lng: "143.95555", lat: "-6.314993" },
    { value: 'Paraguay', label: 'Paraguay', lng: "-58.443832", lat: "-23.442503" },
    { value: 'Peru', label: 'Peru', lng: "-75.015152", lat: "-9.189967" },
    { value: 'Philippines', label: 'Philippines', lng: "121.774017", lat: "12.879721" },
    { value: 'Poland', label: 'Poland', lng: "19.145136", lat: "51.919438" },
    { value: 'Portugal', label: 'Portugal', lng: "-8.224454", lat: "39.399872" },
    { value: 'Puerto Rico', label: 'Puerto Rico', lng: "-66.590149", lat: "18.220833" },
    { value: 'Qatar', label: 'Qatar', lng: "51.183884", lat: "25.354826" },
    { value: 'Republic of Congo', label: 'Republic of Congo', lng: "15.827659", lat: "-0.228021" },
    { value: 'Republic of Korea', label: 'Republic of Korea', lng: "127.766922", lat: "35.907757" },
    { value: 'Reunion', label: 'Reunion', lng: "55.536384", lat: "-21.115141" },
    { value: 'Romania', label: 'Romania', lng: "24.96676", lat: "45.943161" },
    { value: 'Russian Federation', label: 'Russian Federation', lng: "105.318756", lat: "61.52401" },
    { value: 'Rwanda', label: 'Rwanda', lng: '29.873888', lat: '-1.940278' },
    { value: 'Saint Helena', label: 'Saint Helena', lng: '-5.71511', lat: '-15.965' },
    { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis', lng: '-62.7164', lat: '17.357822' },
    { value: 'Saint Lucia', label: 'Saint Lucia', lng: '-60.978893', lat: '13.909444' },
    { value: 'Saint Vincent and the Grenadines', label: 'Saint Vincent and the Grenadines', lng: '-61.19417', lat: '13.252817' },
    { value: 'Samoa', label: 'Samoa', lng: '-172.104629', lat: '-13.753243' },
    { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe', lng: '6.613081', lat: '0.18636' },
    { value: 'Saudi Arabia', label: 'Saudi Arabia', lng: '45.079162', lat: '23.885942' },
    { value: 'Senegal', label: 'Senegal', lng: '-14.452362', lat: '14.497401' },
    { value: 'Serbia', label: 'Serbia', lng: '21.005859', lat: '44.016521' },
    { value: 'Seychelles', label: 'Seychelles', lng: '55.491977', lat: '-4.679574' },
    { value: 'Sierra Leone', label: 'Sierra Leone', lng: '-11.79271', lat: '8.460555' },
    { value: 'Singapore', label: 'Singapore', lng: '103.819836', lat: '1.352083' },
    { value: 'Slovakia', label: 'Slovakia', lng: '19.699024', lat: '48.669026' },
    { value: 'Slovenia', label: 'Slovenia', lng: '14.995463', lat: '46.151241' },
    { value: 'Solomon Islands', label: 'Solomon Islands', lng: '160.156194', lat: '-9.64571' },
    { value: 'Somalia', label: 'Somalia', lng: '46.199616', lat: '5.152149' },
    { value: 'South Africa', label: 'South Africa', lng: '25.083901', lat: '-29.000341' },
    { value: 'South Sudan', label: 'South Sudan', lng: '30.216667', lat: '6.877000' },
    { value: 'Spain', label: 'Spain', lng: '-3.74922', lat: '40.463667' },
    { value: 'Sri Lanka', label: 'Sri Lanka', lng: '80.771797', lat: '7.873054' },
    { value: 'Sudan', label: 'Sudan', lng: '30.217636', lat: '12.862807' },
    { value: 'Suriname', label: 'Suriname', lng: '-55.912882', lat: '4.130554' },
    { value: "Svalbard and Jan Mayen", label: "Svalbard and Jan Mayen", lng: "23.6703", lat: "77.5536" },
    { value: "Swaziland", label: "Swaziland", lng: "31.4659", lat: "-26.5225" },
    { value: "Sweden", label: "Sweden", lng: "18.6435", lat: "60.1282" },
    { value: "Switzerland", label: "Switzerland", lng: "8.2275", lat: "46.8182" },
    { value: "Syria", label: "Syria", lng: "38.9968", lat: "34.8021" },
    { value: "Taiwan", label: "Taiwan", lng: "120.9605", lat: "23.6978" },
    { value: "Tajikistan", label: "Tajikistan", lng: "71.2761", lat: "38.8610" },
    { value: "Tanzania", label: "Tanzania", lng: "34.8888", lat: "-6.3690" },
    { value: "Thailand", label: "Thailand", lng: "100.9925", lat: "15.8700" },
    { value: "The Gambia", label: "The Gambia", lng: "-15.3101", lat: "13.4432" },
    { value: "Timor-Leste", label: "Timor-Leste", lng: "125.7275", lat: "-8.8742" },
    { value: "Togo", label: "Togo", lng: "1.2225", lat: "8.6195" },
    { value: "Tokelau", label: "Tokelau", lng: "-172.0093", lat: "-9.1668" },
    { value: "Tonga", label: "Tonga", lng: "-175.1982", lat: "-21.1784" },
    { value: "Trinidad and Tobago", label: "Trinidad and Tobago", lng: "-61.2650", lat: "10.6918" },
    { value: "Tunisia", label: "Tunisia", lng: "9.5375", lat: "33.8869" },
    { value: "Turkey", label: "Turkey", lng: "35.2433", lat: "38.9637" },
    { value: "Turkmenistan", label: "Turkmenistan", lng: "59.5563", lat: "38.9697" },
    { value: "Turks and Caicos Islands", label: "Turks and Caicos Islands", lng: "-71.7979", lat: "21.6940" },
    { value: "Tuvalu", label: "Tuvalu", lng: "179.1955", lat: "-8.5178" },
    { value: "Uganda", label: "Uganda", lng: "32.2903", lat: "1.3733" },
    { value: "Ukraine", label: "Ukraine", lng: "31.1656", lat: "48.3794" },
    { value: "United Arab Emirates", label: "United Arab Emirates", lng: "54.3002", lat: "23.9053" },
    { value: 'United Kingdom', label: 'United Kingdom', lng:"-3.435973", lat:"55.378051" },
    { value: 'United States of America', label: 'United States of America', lng:"-95.712891", lat:"37.09024" },
    { value: 'Uruguay', label: 'Uruguay', lng:"-55.765835", lat:"-32.522779" },
    { value: 'Uzbekistan', label: 'Uzbekistan', lng:"64.585262", lat:"41.377491" },
    { value: 'Vanuatu', label: 'Vanuatu', lng:"166.959158", lat:"-15.376706" },
    { value: 'Venezuela', label: 'Venezuela', lng:"-66.58973", lat:"6.42375" },
    { value: 'Vietnam', label: 'Vietnam', lng:"108.277199", lat:"14.058324" },
    { value: 'Wallis and Futuna', label: 'Wallis and Futuna', lng:"-176.204144", lat:"-13.768752" },
    { value: 'Western Sahara', label: 'Western Sahara', lng:"-12.885834", lat:"24.215527" },
    { value: 'Yemen', label: 'Yemen', lng:"48.516388", lat:"15.552727" },
    { value: 'Zambia', label: 'Zambia', lng:"27.849332", lat:"-13.133897" },
    { value: 'Zimbabwe', label: 'Zimbabwe', lng:"29.154857", lat:"-19.015438" }
];

export default dropDownRegion;