const caseData = [
    {
        id: 'Kilowatt',
        name: 'Kilowatt',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_33_png.png',
    },
    {
        id: 'Revolution',
        name: 'Revolution',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_32_png.png',
    },
    {
        id: 'Recoil',
        name: 'Recoil',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_31_png.png',
    },
    {
        id: 'DreamsNightmares',
        name: 'Dreams & Nightmares',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_30_png.png',
    },
    {
        id: 'OperationRiptide',
        name: 'Operation Riptide',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_29_png.png',
    },
    {
        id: 'Snakebite',
        name: 'Snakebite',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_28_png.png',
    },
    {
        id: 'OperationBrokenFang',
        name: 'Operation Broken Fang',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_27_png.png',
    },
    {
        id: 'Fracture',
        name: 'Fracture',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_26_png.png',
    },
    {
        id: 'Prisma2',
        name: 'Prisma 2',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_25_png.png',
    },
    {
        id: 'CS20',
        name: 'CS20',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_24_png.png',
    },
    {
        id: 'ShatteredWeb',
        name: 'Shattered Web',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_23_png.png',
    },
    {
        id: 'Prisma',
        name: 'Prisma',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_22_png.png',
    },
    {
        id: 'DangerZone',
        name: 'Danger Zone',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_21_png.png',
    },
    {
        id: 'Horizon',
        name: 'Horizon',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_20_png.png',
    },
    {
        id: 'Clutch',
        name: 'Clutch',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_19_png.png',
    },
    {
        id: 'Spectrum2',
        name: 'Spectrum 2',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_18_png.png',
    },
    {
        id: 'OperationHydra ',
        name: 'Operation Hydra',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_17_png.png',
    },
    {
        id: 'Spectrum',
        name: 'Spectrum',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_16_png.png',
    },
    {
        id: 'Glove',
        name: 'Glove',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_15_png.png',
    },
    {
        id: 'Gamma2',
        name: 'Gamma 2',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_gamma_2_png.png',
    },
    {
        id: 'Gamma',
        name: 'Gamma',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_13_png.png',
    },
    {
        id: 'Chroma3',
        name: 'Chroma 3',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_12_png.png',
    },
    {
        id: 'OperationWildfire',
        name: 'Operation Wildfire',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_11_png.png',
    },
    {
        id: 'Revolver',
        name: 'Revolver',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_10_png.png',
    },
    {
        id: 'Shadow',
        name: 'Shadow',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_9_png.png',
    },
    {
        id: 'Falchion',
        name: 'Falchion',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_8_png.png',
    },
    {
        id: 'Chroma2',
        name: 'Chroma 2',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_7_png.png',
    },
    {
        id: 'Chroma',
        name: 'Chroma',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_6_png.png',
    },
    {
        id: 'OperationVanguardWeapon',
        name: 'Operation Vanguard Weapon',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_5_png.png',
    },
    {
        id: 'eSports2014Summer',
        name: 'eSports 2014 Summer',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_esports_2014_summer_png.png',
    },
    {
        id: 'OperationBreakoutWeapon',
        name: 'Operation Breakout Weapon',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_4_png.png',
    },
    {
        id: 'HuntsmanWeapon',
        name: 'Huntsman Weapon',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_3_png.png',
    },
    {
        id: 'OperationPhoenixWeapon',
        name: 'Operation Phoenix Weapon',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_2_png.png',
    },
    {
        id: 'CSGOWeaponCase3',
        name: 'CS:GO Weapon Case 3',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_valve_3_png.png',
    },
    {
        id: 'WinterOffensiveWeapon',
        name: 'Winter Offensive Weapon',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_1_png.png',
    },
    {
        id: 'eSports2013Winter ',
        name: 'eSports 2013 Winter',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_esports_2013_14_png.png',
    },
    {
        id: 'CSGOWeaponCase2',
        name: 'CS:GO Weapon Case 2',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_valve_2_png.png',
    },
    {
        id: 'OperationBravo',
        name: 'Operation Bravo',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_operation_ii_png.png',
    },
    {
        id: 'eSports2013',
        name: 'eSports 2013',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_esports_2013_png.png',
    },
    {
        id: 'CSGOWeaponCase',
        name: 'CS:GO Weapon Case',
        img: 'https://raw.githubusercontent.com/mads369j/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_valve_1_png.png',
    }



        

];