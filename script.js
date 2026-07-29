'use strict';

/* ═══════════════════════════════════════════════
   PROJECT DATA — 10 projects, ordered by research depth
   (dissertation ML/DL → applied research → coursework)
═══════════════════════════════════════════════ */
const projects = [

  /* ── 9 (Ch2 — most advanced: deep sequence models, event-grouped CV) ── */
  {
    id: 9, categories: ['research','remote-sensing','ml'],
    tags: [['Dissertation','ptag-research'],['Deep Learning','ptag-ml'],['Remote Sensing','ptag-rs']],
    year: '2024 – Present', location: 'Terrebonne Parish, Louisiana',
    title: 'Hurricane-Driven Agricultural Damage Assessment',
    subtitle: 'PhD Research — LSU Geography (Dissertation Chapter 2, manuscript complete)',
    summary: 'Multi-temporal MODIS NDVI (2016–2025) coupled with hurricane track kinematics, weather, soil salinity, elevation, and sea-level records to map hurricane-driven crop damage and chronic crop-health decline across Terrebonne Parish, benchmarked with event-grouped cross-validation.',
    overview: 'Coastal Louisiana sits at the intersection of some of the most rapidly changing land- and sea-scapes in North America, where recurrent hurricanes, compound flooding, saltwater intrusion, and a high rate of relative sea-level rise converge on a working agricultural landscape. This dissertation chapter (co-authored with Michael Leitner) develops and benchmarks a reproducible ML/DL framework that couples multi-temporal MODIS NDVI observations with hurricane, weather, soil-salinity, elevation, and sea-level data to map hurricane-driven agricultural damage and characterize chronic crop-health decline. Damage was labeled at the pixel level from relative post-storm NDVI decline across 8 named storms, and five machine-learning classifiers were benchmarked against three deep-learning sequence models.',
    questions: [
      'Can multi-temporal MODIS NDVI, combined with hurricane and environmental predictors, reliably map pixel-level hurricane-driven crop damage?',
      'Do deep-learning sequence models (Transformer, LSTM, 1D-CNN) that use the full pre-event NDVI trajectory outperform tabular ML classifiers that use only summary statistics?',
      'How well do models trained on some storms transfer to a storm they have never seen (event-grouped, out-of-storm validation)?',
      'What is the pattern of chronic, cumulative crop-health decline in Terrebonne Parish over the 2016–2025 study period, independent of individual storm damage?'
    ],
    methodology: 'Pixel-level damage labeling from relative post-storm NDVI decline across 8 named storms → Predictor compilation: hurricane track kinematics, gridded weather, soil salinity, elevation, relative sea-level records → Five ML classifiers benchmarked (regularized logistic regression, SVM, random forest, gradient-boosted trees, MLP) against three deep-learning sequence models (1D-CNN, LSTM, Transformer) → Event-grouped cross-validation, holding out entire storms rather than random pixels, to test genuine transfer to unseen events.',
    dataSources: [
      'NASA MODIS NDVI (2016–2025) — multi-temporal vegetation observations',
      'Hurricane track kinematics — storm predictor variables for 8 named storms',
      'Gridded weather data — meteorological predictors',
      'Soil salinity records — saltwater-intrusion predictor',
      'Elevation data — topographic predictor',
      'Relative sea-level records — long-term coastal-change predictor'
    ],
    findings: [
      'Under event-grouped cross-validation (held-out storms), the three deep-learning sequence models occupied the top three positions: CNN1D and Transformer tied for best (AUROC 0.657), followed by LSTM (AUROC 0.651)',
      'All three sequence models outperformed every tabular machine-learning classifier, including logistic regression (AUROC 0.635), the strongest tabular model',
      'The best model (CNN1D) reached a mean F1-score of 0.331 across held-out storms — a modest but genuine score, reflecting real transfer to unseen events rather than the inflated skill random pixel-splitting would produce',
      'The result suggests the temporal trajectory of pre-event NDVI carries predictive information beyond what summary statistics available to tabular models can capture',
      'Among the tabular models, the regularized linear classifier and tree ensembles performed comparably (AUROC near 0.64), with the support vector machine weakest'
    ],
    tools: ['NASA MODIS NDVI','Deep learning (Transformer, LSTM, 1D-CNN)','Python (scikit-learn)','Event-grouped cross-validation','Hurricane track data processing'],
    img: 'maps/project4_flood.png'
  },

  /* ── 1 (Ch1 — dissertation core, 8 ML/DL + SAEML ensemble) ── */
  {
    id: 1, categories: ['research','remote-sensing','ml'],
    tags: [['Dissertation','ptag-research'],['Machine Learning','ptag-ml'],['Coastal GIS','ptag-sa']],
    year: '2024 – Present', location: 'Terrebonne Parish, Louisiana',
    title: 'Multi-Hazard Coastal Susceptibility Mapping',
    subtitle: 'PhD Research — LSU Geography (Submitted for Peer Review)',
    summary: 'Simultaneous susceptibility mapping of four compound coastal hazards — flooding, land subsidence, storm surge, and salinity intrusion — across Terrebonne Parish using 8 ML/DL algorithms and 65 conditioning factors at 30-m resolution.',
    overview: 'This dissertation core paper presents a multi-hazard susceptibility mapping framework for deltaic Louisiana, addressing a critical gap: no prior study had simultaneously mapped all four major coastal hazard types under comparable algorithm diversity and spatially honest validation. Sixty-five conditioning factors spanning ten thematic categories (topography, hydrology, soils, LULC, climate, vegetation, infrastructure, socioeconomics, remote sensing indices, and coastal change) were compiled at 30-m resolution. Features involved in hazard label generation were excluded to prevent circular reasoning. Eight algorithms were evaluated alongside a Spatially Aware Ensemble Meta-Learner (SAEML) trained on spatially separated out-of-fold predictions. Five-fold spatial block cross-validation (5-km blocks) exposed real-world generalizability that conventional holdout metrics conceal.',
    questions: [
      'Can ML and deep learning models simultaneously map four compound coastal hazards with spatially honest validation?',
      'Which algorithm best captures each hazard type — flooding, subsidence, storm surge, and salinity intrusion?',
      'How much do conventional holdout metrics overestimate geographic generalizability versus spatial cross-validation?',
      'Does ensemble stacking (SAEML) consistently outperform individually CV-tuned base models under spatial validation?'
    ],
    methodology: 'Compiled 65 conditioning factors at 30-m across 10 thematic categories → Excluded circular features from label generation → Trained 8 algorithms: XGBoost, Random Forest, GBM, SVM, MLP, 1D-CNN, LSTM, CNN-LSTM → Built SAEML on spatially separated OOF predictions → Evaluated with both conventional holdout and 5-fold spatial block cross-validation (5-km blocks) → Produced five-class susceptibility maps for all four hazards → Assessed spatial transferability via holdout-to-CV performance gap.',
    dataSources: [
      'USGS/NASA 30-m DEM (SRTM, ALOS) — elevation and slope conditioning',
      'Sentinel-1 SAR (VV/VH, 10 m) — flood extent and subsidence proxies',
      'USGS Topobathymetry — sub-water elevation for storm surge modeling',
      'CPRA salinity and vegetation monitoring data — salinity intrusion labels',
      'FEMA National Flood Hazard Layer (NFHL) — flood zone conditioning factors',
      'NLCD / DynamicWorld 10-m LULC — land cover categories',
      'USGS StreamStats and NHD — hydrological network conditioning',
      'U.S. Census 2020 (tracts) — socioeconomic vulnerability indicators',
      'NASA MODIS NDVI / LST (250 m) — vegetation and thermal indices',
      'Louisiana Coastal Master Plan — subsidence rates and land loss data'
    ],
    findings: [
      'XGBoost delivered the strongest overall holdout performance, achieving the top accuracy for flood, subsidence, and storm surge, while SVM narrowly led salinity intrusion',
      '1D-CNN and CNN-LSTM were competitive with XGBoost on several hazards, while LSTM consistently ranked lowest across all four hazards and both validation schemes',
      'Spatial block cross-validation showed substantially lower performance than conventional random holdout testing across all hazards — a gap this manuscript is still refining through revision, so an exact figure is intentionally omitted here pending final published numbers',
      'A Spatially Aware Ensemble Meta-Learner (SAEML) stacking the eight base models was evaluated under the same spatially honest validation as a check on whether ensembling meaningfully improves spatial generalization',
      'A composite multi-hazard index (combining all four hazard layers, scaled 0–1) shows the most severely exposed areas concentrated in southern Terrebonne and lower Plaquemines Parish, where flooding, subsidence, storm surge, and salinity intrusion converge',
      'Findings reinforce the broader methodological point that random holdout evaluation can substantially overstate a susceptibility-mapping model\'s true geographic transferability'
    ],
    tools: ['XGBoost / GBM / Random Forest','1D-CNN / LSTM / CNN-LSTM (TensorFlow)','Python (scikit-learn, geopandas, rasterio)','Google Earth Engine (JS API)','ArcGIS Pro','5-fold Spatial Block Cross-Validation'],
    img: 'maps/project1_multihazard.png'
  },

  /* ── 4 ── */
  {
    id: 4, categories: ['research','remote-sensing','ml'],
    tags: [['Ensemble ML','ptag-ml'],['Landsat 8','ptag-rs'],['Drought','ptag-research']],
    year: '2024 – Present', location: 'Louisiana Statewide — 30-m Resolution',
    title: 'Ensemble ML Drought Susceptibility Mapping',
    subtitle: 'Journal Manuscript (Under Review) — ML & Remote Sensing',
    summary: 'Statewide 30-m drought susceptibility framework for Louisiana integrating Landsat 8 OLI and environmental variables, comparing Random Forest, XGBoost, ANN, and SVM regressors — XGBoost was the strongest individual performer (R² ≈ 0.93).',
    overview: 'Louisiana experienced its most extreme drought events in 2000, 2012, and 2023, severely disrupting agricultural and hydrological systems. Standard NOAA/NCEI drought products lack the resolution for local-scale risk assessment. This study develops a 30-m ensemble ML drought framework using Landsat 8 OLI satellite data combined with 19 environmental variables spanning vegetation, topography, hydrology, soil, thermal, and atmospheric conditions. Nineteen candidate variables were screened to 15 via Pearson correlation and Variance Inflation Factor tests. Four ML models were trained with an 80/20 temporal split; the two best-performing models were combined via stacking ensemble with a linear regression meta-learner. Hotspot analysis identified the most drought-impacted land cover types statewide. The framework targets web-platform integration for state and local agencies.',
    questions: [
      'Which ML algorithm most accurately predicts drought susceptibility at 30-m resolution across Louisiana?',
      'Which combination of Landsat 8 spectral indices and environmental variables best differentiates D0–D4 drought severity classes?',
      'Does an XGB+ANN stacking ensemble outperform individual models on both continuous (R²) and classification (AUC) accuracy?',
      'Which land cover types concentrate the highest statistically significant drought hotspot clusters statewide?'
    ],
    methodology: 'Landsat 8 OLI spectral index extraction via GEE (NDVI, NDWI, LST, EVI, SAVI, NBR) → Environmental variable compilation: topography (DEM, slope, TWI, SPI), soil (clay %, organic carbon), hydrology, atmospheric (VPD, precipitation anomaly) → Feature screening via Pearson correlation and VIF → Repeated randomized train-test evaluation of four regressors (Random Forest, XGBoost, ANN, SVM) with hyperparameter search → Getis-Ord Gi* hotspot analysis by NLCD land cover class.',
    dataSources: [
      'Landsat 8 OLI (30-m) — NDVI, NDWI, EVI, LST, SAVI, NBR spectral indices via GEE',
      'USDA Drought Monitor (USDM) weekly maps — D0–D4 severity training labels',
      'SRTM / ALOS DEM (30-m) — topographic conditioning (slope, aspect, TWI, SPI)',
      'SoilGrids (250-m, resampled to 30-m) — clay %, organic carbon, bulk density',
      'PRISM climate normals — precipitation anomaly and vapor pressure deficit',
      'NLCD 2021 land cover — stratification for hotspot analysis by land cover class',
      'NOAA NCEI drought records — historical validation reference',
      'LSU AgCenter crop yield data — agricultural impact validation'
    ],
    findings: [
      'XGBoost achieved the best individual model performance (R² ≈ 0.93), narrowly ahead of Random Forest (R² ≈ 0.91–0.92)',
      'ANN and SVM trailed the tree-based models by a wide margin, with R² typically in the 0.6–0.8 range depending on the train-test split',
      'Ensemble combinations of the top models were explored to build on the XGBoost baseline',
      'Hotspot analysis identified agricultural lands in the Atchafalaya Basin and central uplands as highest-risk drought clusters',
      'The tree-based models\' clear advantage over ANN and SVM is consistent with drought severity being well explained by a moderate number of structured environmental variables rather than requiring the flexibility of a neural or kernel-based model',
      'The 30-m framework enables parish and sub-parish drought mapping not possible with standard NOAA county-level weekly products'
    ],
    tools: ['Google Earth Engine (JS API)','Python (scikit-learn, XGBoost, TensorFlow)','Landsat 8 OLI (30-m)','ArcGIS Pro','Getis-Ord Gi* Hotspot Analysis','USDA Drought Monitor API'],
    img: 'maps/project4_drought.jpg'
  },

  /* ── 5 ── */
  {
    id: 5, categories: ['research','ml'],
    tags: [['Deep Learning','ptag-ml'],['GeoAI','ptag-rs'],['Precision Ag','ptag-research']],
    year: '2024 – Present', location: 'Louisiana — AERIS Weather Network',
    title: 'ML-Driven ET₀ Modeling for Precision Irrigation',
    subtitle: 'Book Chapter — "Advancing Precision Irrigation in Humid Climates: Machine Learning–Driven Reference Evapotranspiration Modeling for Louisiana Agriculture"',
    summary: 'ET₀ modeling framework benchmarking 4 empirical methods (FAO-56 PM, Hargreaves-Samani, Priestley-Taylor, Turc) against RF, XGBoost, ANN, LSTM, and 1D-CNN across 20 AERIS stations. The satellite-augmented LSTM model was the top performer (RMSE = 0.221 mm/day, NSE = 0.973), an 80.3% RMSE reduction versus the Hargreaves-Samani baseline.',
    overview: 'Co-authored with Rubayet Bin Mostafiz (LSU AgCenter LaHouse), this chapter addresses a persistent challenge in humid subtropical agriculture: Louisiana\'s erratic intra-seasonal rainfall and intense convective activity undermine standard empirical ET₀ formulas that were parameterized under arid/temperate conditions. The chapter benchmarks four empirical methods against three ML models and two deep-learning architectures using daily records from 20 AERIS stations, then adds a GeoAI layer (NASA MODIS/VIIRS, NOAA GOES-East, NASA POWER) to extend estimates beyond the point-based station network to spatially continuous, 0.05°-resolution ET₀ maps.',
    questions: [
      'Which empirical ET₀ method (FAO-56 PM, Hargreaves-Samani, Priestley-Taylor, Turc) best captures Louisiana\'s humid subtropical variability?',
      'Do ML (RF, XGB, ANN) and deep learning (LSTM, 1D-CNN) models consistently outperform empirical methods under Louisiana conditions?',
      'Does adding satellite-derived GeoAI inputs (MODIS/VIIRS, GOES-East, NASA POWER) meaningfully improve accuracy beyond ground-only models?',
      'How does model performance vary seasonally, and what spatial gradients in ET₀ demand does a gridded model reveal across Louisiana?'
    ],
    methodology: 'AERIS network meteorological data (20 stations, daily temperature, humidity, wind speed, solar radiation) → FAO-56 PM as ground-truth benchmark → Empirical method benchmarking (Hargreaves-Samani, Priestley-Taylor, Turc) against Moriasi et al. (2007) performance criteria → ML training under ground-only "Configuration A" (RF, XGBoost, ANN) → Deep learning (LSTM, 1D-CNN) under Configuration A → Satellite-augmented "Configuration B" retrains all 5 ML/DL models with GeoAI inputs (MODIS/VIIRS LST/NDVI/EVI, GOES-East cloud fraction/shortwave radiation, NASA POWER reanalysis) → Seasonal (by-season) and spatial (0.05° gridded) performance evaluation via RMSE, MAE, R², and Nash-Sutcliffe Efficiency (NSE).',
    dataSources: [
      'Louisiana AERIS weather network (20 stations) — daily temperature, humidity, wind speed, solar radiation',
      'ASCE FAO-56 Penman-Monteith — reference ET₀ ground truth for model training',
      'NASA MODIS/VIIRS — land surface temperature, NDVI, EVI (GeoAI layer)',
      'NOAA GOES-East — cloud fraction, shortwave radiation (GeoAI layer)',
      'NASA POWER — agroclimatic reanalysis (GeoAI layer)',
      'DIRT soil moisture monitoring tool',
      'LSU AgCenter LAIS infrastructure — operational integration target'
    ],
    findings: [
      'The satellite-augmented LSTM model (Configuration B) was the top performer overall: RMSE = 0.221 mm/day, MAE = 0.160 mm/day, R² = 0.983, NSE = 0.973 — an 80.3% RMSE reduction versus the Hargreaves-Samani baseline',
      'Hargreaves-Samani was the weakest method tested (RMSE = 1.12 mm/day, NSE = 0.614, classified "Unsatisfactory" under Moriasi et al. 2007 criteria) and systematically overestimates ET₀ in Louisiana\'s humid conditions, with bias peaking at +24.6% of mean PM ET₀ during summer',
      'Under ground-only Configuration A, all ML and DL models substantially outperformed every empirical method; XGBoost led the classical ML models (RMSE = 0.342, NSE = 0.952) and LSTM led overall (RMSE = 0.293, NSE = 0.962)',
      'Adding satellite (GeoAI) inputs improved RMSE by roughly 8–15% across every ML/DL model configuration, with the largest gains during peak summer convective periods',
      'Summer (JJA) was the hardest season for every model, but the satellite-augmented LSTM\'s worst-season performance (JJA NSE = 0.963) still exceeded the best empirical method\'s best-season performance (Priestley-Taylor, JJA NSE = 0.791)',
      'Gridded ET₀ maps reveal a pronounced north–south gradient — producers in northern parishes face roughly 9–11 mm greater weekly crop water demand in peak summer than producers in coastal parishes, a difference station-based interpolation alone cannot resolve'
    ],
    tools: ['Python (scikit-learn, XGBoost, TensorFlow/Keras)','LSTM & 1D-CNN Deep Learning','NASA MODIS/VIIRS APIs','NOAA GOES-East','NASA POWER API','FAO-56 Penman-Monteith (custom implementation)'],
    img: 'maps/project5_et.jpg'
  },

  /* ── 3 ── */
  {
    id: 3, categories: ['research','spatial-analysis'],
    tags: [['Book Chapter','ptag-research'],['Panel Data','ptag-sa'],['Coastal LA','ptag-rs']],
    year: '2026', location: 'Louisiana Gulf Coast — 11 Sugarcane Parishes',
    title: 'Climate-Induced Migration & Coastal Agriculture',
    subtitle: 'Book Chapter — Climate on the Move (In Press, 2026)',
    summary: 'Parish-year panel analysis (2013–2018) linking compound coastal hazards — storms, drought, and saltwater intrusion — to Louisiana sugarcane yield losses, quantifying the hazard–agriculture–mobility pathway across 11 coastal parishes.',
    overview: 'Co-authored with Rubayet Bin Mostafiz (LSU AgCenter LaHouse), this book chapter develops a hybrid evidence base for climate migration\'s impact on agriculture and food security in hazard-prone coastal Louisiana. We conceptually frame a hazard–agriculture–mobility pathway in which storms, drought, and saltwater intrusion shape agricultural outcomes that translate into mobility pressures through income volatility and infrastructure disruption. Empirically, a parish-year panel (2013–2018, n=11 parishes, 66 observations) for Louisiana sugarcane combines yield and acreage from USDA NASS, storm metrics from NOAA Storm Events, drought exposure from the US Drought Monitor (DSCI), and salinity proxies from the Coastwide Reference Monitoring System (CRMS). Fixed-effects regressions with parish and year effects provide directional evidence of multi-hazard agricultural impact.',
    questions: [
      'How do compound coastal hazards — storms, drought, and saltwater intrusion — jointly affect sugarcane yields across Louisiana parishes?',
      'Which hazard type exerts the strongest independent effect on agricultural output and farm mobility pressure?',
      'Can a parish-year fixed-effects approach identify multi-hazard thresholds that trigger significant yield losses?',
      'How do spatial patterns of yield decline correlate with known climate out-migration pressures in ACS data?'
    ],
    methodology: 'Parish-year panel dataset construction (2013–2018, 11 parishes, 66 observations) → USDA NASS yield and acreage compilation by parish → NOAA Storm Events storm metrics and damage estimates → US Drought Monitor DSCI and D2+ drought week counts → CRMS salinity and water level proxies → Fixed-effects regression (parish + year FE, parish-clustered standard errors) → Spatial mapping of yield trends and hazard layers → ArcGIS Pro cartographic composition for book chapter publication.',
    dataSources: [
      'USDA NASS (2013–2018) — sugarcane yield (tons/acre) and harvested acreage by parish',
      'NOAA Storm Events Database — storm event frequency, damage, and track data',
      'US Drought Monitor — DSCI (Drought Severity Coverage Index) and weeks in D2+ drought',
      'CRMS (Coastwide Reference Monitoring System) — salinity and water level proxies',
      'CPRA Coastal Zone Boundary — 11-parish coastal zone delineation',
      'ACS 5-year Census — out-migration rates and population change by parish',
      'TIGER/Line 2022 — Louisiana parish boundaries for spatial mapping'
    ],
    findings: [
      'Drought duration (D2+ weeks) is directionally associated with lower sugarcane yields in the fixed-effects regressions',
      'Coastal salinity conditions align with lower yields, consistent with saltwater intrusion degrading root-zone soil quality over time — though salinity coefficients are interpreted cautiously given data limitations',
      'Storm impacts are heterogeneous and sensitive to which exposure metric is used (peak damage vs. cumulative event frequency)',
      'Parishes with the greatest overlap of multiple hazards tend to also show stronger out-migration trends in ACS 5-year estimates',
      'The chapter frames stabilizing agricultural outcomes via targeted hazard mitigation as a plausible lever for reducing distress-migration pressure in coastal communities'
    ],
    tools: ['ArcGIS Pro (cartographic mapping)','R (fixest — fixed-effects regression)','USDA NASS Data API','NOAA Storm Events Database','US Drought Monitor API','CPRA / CRMS Data Portal'],
    img: 'maps/project3_migration.png'
  },

  /* ── 6 ── */
  {
    id: 6, categories: ['research','remote-sensing'],
    tags: [['Book Chapter','ptag-research'],['Cyclone Risk','ptag-sa'],['Multi-Hazard','ptag-rs']],
    year: '2024', location: 'Bay of Bengal — Bangladesh · India · Myanmar',
    title: 'One Storm, Many Hazards — Bay of Bengal',
    subtitle: 'Book Chapter — "One Storm, Many Hazards: Multi-hazard Planning for Wind, Surge, and Flood Risks in the Bay of Bengal Region"',
    summary: 'Multi-scale resilience framework for Bay of Bengal tropical cyclone compound hazard risk — analyzing extreme wind, storm surge, and flooding interactions in Cyclones Sidr (2007), Amphan (2020), and Mocha (2023) across Bangladesh, India, and Myanmar.',
    overview: 'Co-authored with Rubayet Bin Mostafiz (LSU AgCenter), this chapter advances multi-hazard planning theory for the world\'s most lethal cyclone basin — the Bay of Bengal accounts for ~80% of global cyclone-related deaths, driven by storm frequency, dense coastal populations, and low-lying deltaic geography. The chapter critically analyzes three recent major cyclones as case studies in compound hazard convergence and institutional failure, then proposes a novel multi-scale resilience framework integrating advanced hazard modeling with institutional analysis and participatory community engagement. The Technology-Context Fit (TCF) framework evaluates storm surge models, composite risk atlases, and community-based early warning systems for feasibility, trade-offs, and scalability constraints under different national capacity conditions.',
    questions: [
      'How do compound cyclone hazards (extreme winds + storm surge + flooding) interact spatially and temporally to amplify risk beyond single-hazard assessments?',
      'Why do worst-case cyclone scenarios result from hazard temporal convergence rather than from individual hazard peak intensity?',
      'What institutional barriers prevent integrated multi-hazard governance despite known compound risks in Bangladesh, India, and Myanmar?',
      'How should storm surge models, composite risk atlases, and community-based EWS be prioritized under different Technology-Context Fit conditions?'
    ],
    methodology: 'Systematic compound hazard analysis of Cyclones Sidr (2007), Amphan (2020), and Mocha (2023) → Hazard interaction discussion: wind fields, storm surge extents, flood and inland-flooding interactions → Institutional mapping of disaster risk governance across Bangladesh, India, and Myanmar → Review of community-based early warning systems and their scalability constraints → Multi-hazard planning framework synthesis.',
    dataSources: [
      'NOAA / IMD cyclone track and intensity archives — Sidr 2007, Amphan 2020, Mocha 2023',
      'Bangladesh Meteorological Department — storm surge observational records',
      'SRTM DEM / CoastalDEM — low-elevation coastal zone delineation',
      'UNOSAT / Copernicus EMS — satellite-derived flood extent maps from SAR',
      'OpenStreetMap + OCHA HDX — population exposure and infrastructure data',
      'World Bank GFDRR — disaster damage and economic loss database',
      'INFORM Risk Index — institutional capacity and governance metrics',
      'GADM administrative boundaries — national and sub-national spatial framework'
    ],
    findings: [
      'Cyclones Sidr, Amphan, and Mocha illustrate how compounding hazards — high winds, storm surge, and inland flooding — interact in ways that single-hazard planning misses, particularly when a storm coincides with high tide or saturated antecedent soil conditions',
      'Fragmented, single-hazard disaster risk governance persistently underestimates compound exposure even when individual component risks are reasonably well mapped',
      'Community-based early warning systems show real value but face scalability and equity constraints, with vulnerable groups in low-lying settlements often the least well served',
      'The chapter concludes that a multi-hazard planning approach — treating wind, surge, and flood risk jointly rather than separately — is needed for genuine risk reduction across the Bay of Bengal region'
    ],
    tools: ['Literature synthesis / case-study analysis','ArcGIS Pro','Google Earth Engine','Regional disaster-governance review'],
    img: 'maps/project6_cyclone.png'
  },

  /* ── 10 ── */
  {
    id: 10, categories: ['research'],
    tags: [['Book Chapter','ptag-research'],['Drought Policy','ptag-sa'],['Mitigation','ptag-cw']],
    year: '2026', location: 'Global synthesis (incl. Sahel region case study)',
    title: 'Drought Mitigation',
    subtitle: 'Book Chapter — In Active Revision',
    summary: 'A literature-based synthesis of drought forecasting and mitigation strategies — agricultural, climate-smart, community-based, and ecosystem-based approaches — co-authored with Rubayet Bin Mostafiz, Robert V. Rohli, and Nazla Bushra. Distinct from the statewide ML drought-susceptibility mapping project (a separate, quantitative modeling study).',
    overview: 'Drought poses significant challenges as a natural hazard, affecting water resources, agriculture, ecosystems, and economies worldwide, with climate change exacerbating both its frequency and intensity. This chapter surveys drought forecasting approaches and reviews mitigation strategies across several tracks: agricultural mitigation strategies, climate-smart agricultural practices, community-based resilience programs (with a dedicated case study on the Sahel region), climate-resilient agriculture, and ecosystem-based approaches. It is intentionally distinct from the dissertation-adjacent "Ensemble ML Drought Susceptibility Mapping" project — that project is a quantitative Louisiana-specific ML model, while this chapter is a global mitigation-and-policy literature synthesis.',
    questions: [
      'What forecasting approaches are available for anticipating drought onset and severity?',
      'Which agricultural mitigation and climate-smart practices are most effective for reducing drought impact?',
      'What can community-based resilience programs, such as those in the Sahel region, teach about locally-grounded drought adaptation?',
      'How do ecosystem-based approaches complement structural and agronomic drought mitigation strategies?'
    ],
    methodology: 'Structured literature synthesis organized by mitigation track: drought forecasting → agricultural mitigation strategies → climate-smart agricultural practices → community-based resilience programs (Sahel region case study) → climate-resilient agriculture → ecosystem-based approaches → synthesis and conclusion.',
    dataSources: [
      'Peer-reviewed literature on drought forecasting, agricultural mitigation, and resilience programs',
      'Sahel region community-based resilience program case studies'
    ],
    findings: [
      'Effective drought mitigation requires combining forecasting, agricultural adaptation, and community-based and ecosystem-based approaches rather than relying on any single strategy',
      'The Sahel region case study illustrates how community-based resilience programs can provide locally-grounded adaptation pathways in chronically drought-exposed regions',
      'Climate-smart agricultural practices and ecosystem-based approaches are presented as complementary, not competing, tracks within a broader drought mitigation strategy'
    ],
    tools: ['Literature synthesis','Comparative policy review'],
    img: 'maps/project4_drought.jpg'
  },

  /* ── 8 ── */
  {
    id: 8, categories: ['remote-sensing','spatial-analysis','coursework'],
    tags: [['Course Final Project','ptag-cw'],['Flood Vulnerability','ptag-sa'],['SAR / NDWI','ptag-rs']],
    year: '2025', location: 'East Baton Rouge Parish, Louisiana',
    title: 'Flood Vulnerability & Inundation Mapping',
    subtitle: 'GEOG 7955 Course Final Project — Advanced Remote Sensing, LSU Geography (coursework, not a publication)',
    summary: 'Composite flood-vulnerability index for East Baton Rouge Parish combining FEMA regulatory flood zones, DEM-derived terrain, NLCD land cover, and multi-temporal Sentinel-1 SAR / Sentinel-2 NDWI change around the 2016 "Great Flood," validated by comparing the index against satellite-observed inundation.',
    overview: 'A self-designed final project for GEOG 7955 (Advanced Remote Sensing), motivated by the 2016 "Great Flood" that inundated over 40% of East Baton Rouge Parish. The project combines FEMA regulatory floodplain data, a mosaicked 9-tile USGS DEM (with derived slope, aspect, and stream-distance layers), NLCD land-cover risk classification, and pre/post-flood (June–July vs. September 2016) Sentinel-1 SAR and Sentinel-2 NDVI/NDWI change detection into a single composite vulnerability index, then checks how well that index lines up with satellite-observed inundation extent.',
    questions: [
      'How much of East Baton Rouge Parish falls within FEMA\'s highest-risk regulatory flood zones, and how does that compare to actual observed inundation?',
      'Which combination of terrain, land-cover, and satellite-derived indicators best predicts flood vulnerability at the neighborhood scale?',
      'Where do GIS-modeled vulnerability hot spots align (or fail to align) with radar- and NDWI-observed flooding from the 2016 event?',
      'What does this composite approach add over relying on FEMA flood zones alone for prioritizing mitigation investment?'
    ],
    methodology: 'Vector standardization: FEMA 100-year floodplain and USGS NHD flowlines clipped and reprojected to NAD83 StatePlane Louisiana South → Raster standardization: 9-tile USGS DEM mosaicked and clipped to parish extent, with derived slope, aspect, and Euclidean distance-to-stream layers → Sentinel-1 SAR and Sentinel-2 imagery filtered into pre-flood (Jun–Jul 2016) and post-flood (Sep 2016) periods, with NDVI/NDWI computed for both and differenced (ΔNDWI) to flag newly inundated areas → All layers harmonized to a common projection, cell size, and extent → Zonal statistics by census tract, Getis-Ord Gi* hot-spot detection, and composite vulnerability index construction → Cross-check of the index and hot-spot pattern against the ΔNDWI and SAR-observed inundation extent.',
    dataSources: [
      'FEMA National Flood Hazard Layer — 100-year regulatory floodplain zones (AE, A, AO, X)',
      'USGS DEM (9 tiles, mosaicked) — terrain, slope, aspect',
      'USGS NHD flowlines — stream-distance proximity layer',
      'NLCD land cover — land-cover flood-risk classification',
      'Sentinel-1 SAR — pre/post-flood radar-observed inundation',
      'Sentinel-2 — pre/post-flood NDVI/NDWI change detection',
      'NAIP aerial imagery and Landsat — supporting true-color composites'
    ],
    findings: [
      'FEMA regulatory zones show ~48% of the parish in the highest-risk AE zone and a further ~18% in zones A/AO — over 60% of East Baton Rouge Parish under some form of regulatory flood risk',
      'Elevation analysis found roughly 40% of the parish at or below 8 ft NAVD88 (concentrated along the Mississippi River corridor and bayou bottoms) versus only about 15% above 32 ft',
      'The land-cover risk classification put roughly 32% of the parish in the "High" or "Very High" risk classes (dense urban/industrial development with high impervious cover), versus about 70% in "Low" to "Moderate" risk classes',
      'ΔNDWI change detection showed roughly 38% of the parish with moderate-to-strong water gain after the 2016 flood, while about a third showed no meaningful moisture change',
      'The composite vulnerability index\'s "High"/"Very High" zones visually aligned with the areas of deepest SAR-observed flooding, concentrated in river-bend and bayou-bottom neighborhoods — supporting the project\'s premise that combining regulatory, terrain, land-cover, and satellite layers adds targeting precision beyond FEMA zones alone'
    ],
    tools: ['ArcGIS Pro (Zonal Statistics, Getis-Ord Gi*)','Sentinel-1 SAR','Sentinel-2 (NDVI/NDWI)','FEMA NFHL','USGS DEM/NHD','Python'],
    img: 'maps/project5_coastal.png'
  },

  /* ── 2 ── */
  {
    id: 2, categories: ['research','spatial-analysis'],
    tags: [['Geostatistics','ptag-sa'],['Kriging','ptag-cw'],['Climate Analysis','ptag-research']],
    year: '2024', location: 'Louisiana Statewide — Weather Station Network',
    title: 'Spatial Sensitivity of Reference Evapotranspiration',
    subtitle: 'GEOG 7973 Term Paper — Spatial Statistics, LSU Geography',
    summary: 'Grid-scale sensitivity analysis of FAO-56 Penman-Monteith reference evapotranspiration (ETo) to temperature, relative humidity, solar radiation, and wind speed across 10 Louisiana weather stations, mapped via Ordinary Kriging with Getis-Ord Gi* hotspot detection.',
    overview: 'This term paper analyzes the spatial sensitivity of reference evapotranspiration (ETo) to its four driving climate variables across Louisiana, using 2022–2023 daily data from 10 weather stations spanning the state\'s northern, central, and coastal zones. A One-At-a-Time (OAT) sensitivity analysis, implemented as a custom ArcGIS Pro Python toolbox, quantified how much each variable (and each pairwise combination) shifts FAO-56 Penman-Monteith ETo. The resulting sensitivity index rasters were interpolated via Ordinary Kriging and tested for spatial clustering using global Moran\'s I and Getis-Ord Gi* hotspot analysis.',
    questions: [
      'Which of the four FAO-56 PM input variables (temperature, relative humidity, solar radiation, wind speed) most strongly drives ETo variability across Louisiana?',
      'How does ETo sensitivity to each variable, and to pairwise combinations, vary spatially across the state\'s climate zones?',
      'Do sensitivity patterns cluster into statistically significant hot and cold spots, and where?',
      'Does spatial autocorrelation in the sensitivity surfaces support geostatistical interpolation over simpler distance-based methods?'
    ],
    methodology: 'Weather station data collection (10 stations, 2022–2023 daily temperature, RH, solar radiation, wind speed) → FAO-56 Penman-Monteith ETo baseline calculation → Custom ArcGIS Pro Python toolbox for One-At-a-Time (OAT) sensitivity index computation, single-variable and pairwise-combination runs → Ordinary Kriging interpolation of sensitivity index rasters → Zonal statistics by parish → Getis-Ord Gi* hotspot detection (inverse-distance conceptualization, 8,380 m threshold) → Global Moran\'s I spatial autocorrelation testing.',
    dataSources: [
      'Louisiana weather station network (10 stations: Ben Hur, Chase, Crowley, Hammond, Houma, Iberia, Dean Lee, R&D Research, St. Gabriel, Red River) — 2022–2023 daily temperature, RH, solar radiation, wind speed',
      'National Weather Service and local monitoring networks — data source',
      'ArcGIS Pro Geostatistical Analyst — semivariogram fitting and kriging surfaces',
      'ESRI basemaps (Esri, TomTom, Garmin, FAO, NOAA, USGS) — cartographic context'
    ],
    findings: [
      'Temperature and solar radiation emerged as the dominant drivers of ETo variability statewide, with humidity and wind speed playing secondary, more regionally-dependent roles',
      'Humidity sensitivity was highest in southern and coastal Louisiana, where high baseline moisture amplifies its effect on ETo; temperature and solar-radiation sensitivity were more pronounced in the energy-limited north',
      'Global Moran\'s I values were consistently near 1 (≈0.998) with z-scores exceeding 1,090, confirming very strong, highly statistically significant spatial clustering in every sensitivity surface tested',
      'Getis-Ord Gi* hotspot analysis (99% confidence) identified consistent hot-spot/cold-spot clusters for each variable, generally split along a south/coastal vs. north/interior gradient',
      'The strength of spatial clustering supports using kriging-based interpolation over simpler distance-only methods for ETo sensitivity mapping in Louisiana'
    ],
    tools: ['ArcGIS Pro (Geostatistical Analyst, Python toolbox)','Getis-Ord Gi* Spatial Statistics','Moran\'s I Autocorrelation','Ordinary Kriging','FAO-56 Penman-Monteith (custom implementation)','NWS / local station data'],
    img: 'maps/project2_heatisland.jpg'
  },

  /* ── 7 ── */
  {
    id: 7, categories: ['spatial-analysis','coursework'],
    tags: [['Hotspot Analysis','ptag-sa'],['Gi* / Moran\'s I','ptag-cw'],['Geostatistics','ptag-cw']],
    year: '2024', location: 'Louisiana Statewide',
    title: 'Spatial Hotspot & Climate Autocorrelation',
    subtitle: 'GEOG 7973 — Advanced Spatial Statistics, LSU Geography',
    summary: 'Getis-Ord Gi* hotspot analysis and global Moran\'s I applied to grid-scale evapotranspiration sensitivity surfaces across Louisiana — identifying near-maximal, highly significant spatial clustering (Moran\'s I ≈ 0.998, z > 1,090) in every variable tested.',
    overview: 'A companion analysis to the ETo sensitivity kriging study (GEOG 7973), focused specifically on the autocorrelation and hotspot-detection side of the workflow. The same One-At-a-Time sensitivity index rasters for temperature, solar radiation, relative humidity, and wind speed were tested for spatial clustering using global Moran\'s I and local Getis-Ord Gi* statistics, confirming that ETo sensitivity is not randomly distributed across Louisiana but instead follows a strong, statistically robust south/coastal vs. north/interior spatial structure.',
    questions: [
      'Do ETo sensitivity indices for temperature, humidity, solar radiation, and wind speed exhibit statistically significant spatial autocorrelation?',
      'Where do statistically significant hot and cold spot clusters concentrate for each variable at 99% confidence?',
      'How consistent is the clustering pattern across the four different climate-variable sensitivity surfaces?',
      'What distance threshold best captures the spatial structure of these clusters using inverse-distance weighting?'
    ],
    methodology: 'OAT sensitivity index rasters (temperature, solar radiation, relative humidity, wind speed) generated via ArcGIS Pro Python toolbox → Global Moran\'s I spatial autocorrelation testing for each variable → Getis-Ord Gi* hotspot analysis using inverse-distance-weighted conceptualization with an 8,380 m distance threshold → Zonal statistics extraction across Louisiana parishes.',
    dataSources: [
      'Louisiana weather station network (10 stations) — 2022–2023 daily temperature, solar radiation, relative humidity, wind speed',
      'ArcGIS Pro Spatial Statistics Toolbox — Moran\'s I and Getis-Ord Gi* computation',
      'ESRI Spatial Statistics Toolbox — spatial autocorrelation reports'
    ],
    findings: [
      'Global Moran\'s I values were consistently near 1 (≈0.998) across all four sensitivity surfaces, with z-scores exceeding 1,090 and near-zero p-values — confirming the clustering is essentially certain to be non-random',
      'Getis-Ord Gi* hotspot analysis (99% confidence) identified consistent, spatially coherent hot-spot and cold-spot regions for every variable tested',
      'Temperature, solar radiation, and wind-speed sensitivity clustering was strongest in energy-limited northern Louisiana, while relative-humidity clustering was more pronounced in the moisture-dependent south',
      'The consistency of near-maximal Moran\'s I across all four independently-computed sensitivity surfaces suggests the underlying climate driver fields themselves are strongly spatially structured, not an artifact of the sensitivity-index calculation'
    ],
    tools: ['ArcGIS Pro (Spatial Statistics Toolbox)','Getis-Ord Gi* (inverse-distance weighted)','Global Moran\'s I','Python (ArcGIS Python toolbox)'],
    img: 'maps/project7_hotspot.jpg'
  }

];



/* ═══════════════════════════════════════════════
   RENDER CARDS
═══════════════════════════════════════════════ */
function renderCards() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => `
    <div class="project-card reveal" data-cat="${p.categories.join(' ')}" data-id="${p.id}" role="button" tabindex="0" aria-label="View ${p.title}">
      <div class="proj-map">
        <img src="${p.img}" alt="${p.title}" class="proj-map-img" loading="lazy">
        <div class="proj-map-hint">Click to explore</div>
      </div>
      <div class="proj-body">
        <div class="proj-tags">${p.tags.map(([l,c]) => `<span class="ptag ${c}">${l}</span>`).join('')}</div>
        <h3>${p.title}</h3>
        <p class="proj-summary">${p.summary}</p>
        <div class="proj-tech">${p.tools.slice(0,5).map(t => `<span>${t}</span>`).join('')}</div>
        <div class="proj-footer">
          <span class="proj-location">${p.location}</span>
          <span class="proj-btn">View Details →</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════
   RENDER MODALS
═══════════════════════════════════════════════ */
function renderModals() {
  const container = document.getElementById('modalsContainer');
  if (!container) return;
  container.innerHTML = projects.map(p => `
    <div class="modal" id="modal-${p.id}" role="dialog" aria-modal="true" aria-label="${p.title}">
      <div class="modal-box">
        <button class="modal-close" aria-label="Close">&times;</button>
        <!-- Left: Map -->
        <div class="modal-map">
          <div class="modal-map-svg"><img src="${p.img}" alt="${p.title}" class="modal-map-img"></div>
          <div class="modal-map-meta">
            <div class="modal-meta-item"><strong>Year</strong>${p.year}</div>
            <div class="modal-meta-item"><strong>Location</strong>${p.location}</div>
            <div class="modal-meta-item"><strong>Primary Tools</strong>${p.tools[0]}</div>
          </div>
        </div>
        <!-- Right: Content -->
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-tags">${p.tags.map(([l,c]) => `<span class="ptag ${c}">${l}</span>`).join('')}</div>
            <h2 class="modal-title">${p.title}</h2>
            <p class="modal-subtitle">${p.subtitle}</p>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">Research Overview</div>
            <p>${p.overview}</p>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">Key Research Questions</div>
            <ul class="modal-list">${p.questions.map(q => `<li>${q}</li>`).join('')}</ul>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">Methodology</div>
            <p>${p.methodology}</p>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">Data Sources</div>
            <ul class="modal-list data">${p.dataSources.map(d => `<li>${d}</li>`).join('')}</ul>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">Key Findings</div>
            <ul class="modal-list findings">${p.findings.map(f => `<li>${f}</li>`).join('')}</ul>
          </div>

          <div class="modal-section">
            <div class="modal-section-title">Tools & Technologies</div>
            <div class="modal-tools">${p.tools.map(t => `<span class="modal-tool">${t}</span>`).join('')}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════
   MODAL INTERACTIONS
═══════════════════════════════════════════════ */
function initModals() {
  const overlay = document.getElementById('modalOverlay');

  function openModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    if (!modal) return;
    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeAll() {
    document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Card click
  document.getElementById('projectsGrid').addEventListener('click', e => {
    const card = e.target.closest('.project-card');
    if (card) openModal(card.dataset.id);
  });
  document.getElementById('projectsGrid').addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.project-card');
      if (card) { e.preventDefault(); openModal(card.dataset.id); }
    }
  });

  // Close buttons & overlay
  document.getElementById('modalsContainer').addEventListener('click', e => {
    if (e.target.classList.contains('modal-close')) closeAll();
    if (e.target.classList.contains('modal')) closeAll();
  });
  overlay.addEventListener('click', closeAll);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
}

/* ═══════════════════════════════════════════════
   PROJECT FILTER
═══════════════════════════════════════════════ */
function initFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        const cats = (card.dataset.cat || '').split(' ');
        card.classList.toggle('hidden', f !== 'all' && !cats.includes(f));
      });
    });
  });
}

/* ═══════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════ */
function initNav() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40));

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Active link highlight
  const sections = document.querySelectorAll('section[id]');
  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.style.color = a.getAttribute('href') === `#${e.target.id}` ? 'var(--accent)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  sections.forEach(s => sectionObs.observe(s));
}

/* ═══════════════════════════════════════════════
   HERO CANVAS
═══════════════════════════════════════════════ */
function initCanvas() {
  const canvas = document.getElementById('mapCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, nodes, animId;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    nodes = Array.from({ length: Math.floor((W * H) / 13000) }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.32, vy: (Math.random() - 0.5) * 0.32,
      r: Math.random() * 2.2 + 0.8,
      teal: Math.random() > 0.5
    }));
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    // grid
    ctx.strokeStyle = 'rgba(255,255,255,0.025)'; ctx.lineWidth = 0.5;
    for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
    for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
    // links + nodes
    nodes.forEach((n, i) => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      for (let j = i + 1; j < nodes.length; j++) {
        const d = Math.hypot(nodes[j].x - n.x, nodes[j].y - n.y);
        if (d < 130) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,212,170,${(1 - d/130) * 0.3})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(n.x, n.y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
        }
      }
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.teal ? 'rgba(0,212,170,0.7)' : 'rgba(0,150,255,0.6)';
      ctx.fill();
    });
    animId = requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => { cancelAnimationFrame(animId); resize(); loop(); });
  resize(); loop();
}

/* ═══════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════ */
function initReveal() {
  const els = document.querySelectorAll('.skill-card,.project-card,.edu-item,.pub-card,.course-card,.highlight,.stat,.prof-item');
  els.forEach((el, i) => {
    el.classList.add('reveal');
    if (i % 3 === 1) el.classList.add('reveal-delay-1');
    if (i % 3 === 2) el.classList.add('reveal-delay-2');
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════
   PROFICIENCY BARS
═══════════════════════════════════════════════ */
function initProfBars() {
  const fills = document.querySelectorAll('.prof-fill');
  fills.forEach(el => {
    el.dataset.targetWidth = el.style.width || '0%';
    el.style.width = '0';
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.targetWidth;
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  fills.forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════
   STAT COUNTERS
═══════════════════════════════════════════════ */
function initStats() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const num = e.target.querySelector('.stat-num');
      if (!num || num.dataset.done) return;
      num.dataset.done = '1';
      const raw = num.textContent.trim();
      const plus = raw.endsWith('+');
      const target = parseInt(raw.replace(/\D/g, ''), 10);
      const t0 = performance.now();
      (function tick(now) {
        const p = Math.min((now - t0) / 1800, 1);
        const e2 = 1 - Math.pow(1 - p, 3);
        num.textContent = Math.round(target * e2) + (plus ? '+' : '');
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
      io.unobserve(e.target);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stat').forEach(s => io.observe(s));
}

/* ═══════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════ */
function initContact() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Message Sent!';
    btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
    setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; form.reset(); }, 3000);
  });
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  renderModals();
  initModals();
  initFilter();
  initNav();
  initCanvas();
  initReveal();
  initProfBars();
  initStats();
  initContact();
});
