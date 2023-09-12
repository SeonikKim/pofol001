import '../css/Elements.css'
import ElementComponent from '../components/ElementsCompo'
const elementsData = [
    {
        atomicNumber: 1,
        symbol: "H",
        name: "Hydrogen",
        state: "Gas",
        type: "Non-metal",
        period: 1,
        group: 1

    },
    {
        atomicNumber: 2,
        symbol: "He",
        name: "Helium",
        state: "Gas",
        type: "Non-metal",
        period: 1,
        group: 18

    },
    {
        atomicNumber: 3,
        symbol: "Li",
        name: "Lithium",
        state: "Solid",
        type: "Metal",
        period: 2,
        group: 1
    },
    {
        atomicNumber: 4,
        symbol: "Be",
        name: "Beryllium",
        state: "Solid",
        type: "Metal",
        period: 2,
        group: 2
    },
    {
        atomicNumber: 5,
        symbol: "B",
        name: "Boron",
        state: "Solid",
        type: "Metalloid",
        period: 2,
        group: 13
    },
    {
        atomicNumber: 6,
        symbol: "C",
        name: "Carbon",
        state: "Solid",
        type: "Non-metal",
        period: 2,
        group: 14
    },
    {
        atomicNumber: 7,
        symbol: "N",
        name: "Nitrogen",
        state: "Gas",
        type: "Non-metal",
        period: 2,
        group: 15
    },
    {
        atomicNumber: 8,
        symbol: "O",
        name: "Oxygen",
        state: "Gas",
        type: "Non-metal",
        period: 2,
        group: 16
    },
    {
        atomicNumber: 9,
        symbol: "F",
        name: "Fluorine",
        state: "Gas",
        type: "Non-metal",
        period: 2,
        group: 17
    },
    {
        atomicNumber: 10,
        symbol: "Ne",
        name: "Neon",
        state: "Gas",
        type: "Non-metal",
        period: 2,
        group: 18
    },
    {
        atomicNumber: 11,
        symbol: "Na",
        name: "Sodium",
        state: "Solid",
        type: "Metal",
        period: 3,
        group: 1
    },
    {
        atomicNumber: 12,
        symbol: "Mg",
        name: "Magnesium",
        state: "Solid",
        type: "Metal",
        period: 3,
        group: 2
    },
    {
        atomicNumber: 13,
        symbol: "Al",
        name: "Aluminum",
        state: "Solid",
        type: "Metal",
        period: 3,
        group: 13
    },
    {
        atomicNumber: 14,
        symbol: "Si",
        name: "Silicon",
        state: "Solid",
        type: "Metalloid",
        period: 3,
        group: 14
    },
    {
        atomicNumber: 15,
        symbol: "P",
        name: "Phosphorus",
        state: "Solid",
        type: "Non-metal",
        period: 3,
        group: 15
    },
    {
        atomicNumber: 16,
        symbol: "S",
        name: "Sulfur",
        state: "Solid",
        type: "Non-metal",
        period: 3,
        group: 16
    },
    {
        atomicNumber: 17,
        symbol: "Cl",
        name: "Chlorine",
        state: "Gas",
        type: "Non-metal",
        period: 3,
        group: 17
    },
    {
        atomicNumber: 18,
        symbol: "Ar",
        name: "Argon",
        state: "Gas",
        type: "Non-metal",
        period: 3,
        group: 18
    },
    {
        atomicNumber: 19,
        symbol: "K",
        name: "Potassium",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 1
    },
    {
        atomicNumber: 20,
        symbol: "Ca",
        name: "Calcium",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 2
    },
    {
        atomicNumber: 21,
        symbol: "Sc",
        name: "Scandium",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 3
    },
    {
        atomicNumber: 22,
        symbol: "Ti",
        name: "Titanium",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 4
    },
    {
        atomicNumber: 23,
        symbol: "V",
        name: "Vanadium",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 5
    },
    {
        atomicNumber: 24,
        symbol: "Cr",
        name: "Chromium",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 6
    },
    {
        atomicNumber: 25,
        symbol: "Mn",
        name: "Manganese",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 7
    },
    {
        atomicNumber: 26,
        symbol: "Fe",
        name: "Iron",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 8
    },
    {
        atomicNumber: 27,
        symbol: "Co",
        name: "Cobalt",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 9
    },
    {
        atomicNumber: 28,
        symbol: "Ni",
        name: "Nickel",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 10
    },
    {
        atomicNumber: 29,
        symbol: "Cu",
        name: "Copper",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 11
    },
    {
        atomicNumber: 30,
        symbol: "Zn",
        name: "Zinc",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 12
    },
    {
        atomicNumber: 31,
        symbol: "Ga",
        name: "Gallium",
        state: "Solid",
        type: "Metal",
        period: 4,
        group: 13
    },
    {
        atomicNumber: 32,
        symbol: "Ge",
        name: "Germanium",
        state: "Solid",
        type: "Metalloid",
        period: 4,
        group: 14
    },
    {
        atomicNumber: 33,
        symbol: "As",
        name: "Arsenic",
        state: "Solid",
        type: "Metalloid",
        period: 4,
        group: 15
    },
    {
        atomicNumber: 34,
        symbol: "Se",
        name: "Selenium",
        state: "Solid",
        type: "Non-metal",
        period: 4,
        group: 16
    },
    {
        atomicNumber: 35,
        symbol: "Br",
        name: "Bromine",
        state: "Liquid",
        type: "Non-metal",
        period: 4,
        group: 17
    },
    {
        atomicNumber: 36,
        symbol: "Kr",
        name: "Krypton",
        state: "Gas",
        type: "Non-metal",
        period: 4,
        group: 18
    },
    {
        atomicNumber: 37,
        symbol: "Rb",
        name: "Rubidium",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 1
    },
    {
        atomicNumber: 38,
        symbol: "Sr",
        name: "Strontium",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 2
    },
    {
        atomicNumber: 39,
        symbol: "Y",
        name: "Yttrium",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 3
    },
    {
        atomicNumber: 40,
        symbol: "Zr",
        name: "Zirconium",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 4
    },
    {
        atomicNumber: 41,
        symbol: "Nb",
        name: "Niobium",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 5
    },
    {
        atomicNumber: 42,
        symbol: "Mo",
        name: "Molybdenum",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 6
    },
    {
        atomicNumber: 43,
        symbol: "Tc",
        name: "Technetium",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 7
    },
    {
        atomicNumber: 44,
        symbol: "Ru",
        name: "Ruthenium",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 8
    },
    {
        atomicNumber: 45,
        symbol: "Rh",
        name: "Rhodium",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 9
    },
    {
        atomicNumber: 46,
        symbol: "Pd",
        name: "Palladium",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 10
    },
    {
        atomicNumber: 47,
        symbol: "Ag",
        name: "Silver",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 11
    },
    {
        atomicNumber: 48,
        symbol: "Cd",
        name: "Cadmium",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 12
    },
    {
        atomicNumber: 49,
        symbol: "In",
        name: "Indium",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 13
    },
    {
        atomicNumber: 50,
        symbol: "Sn",
        name: "Tin",
        state: "Solid",
        type: "Metal",
        period: 5,
        group: 14
    },
    {
        atomicNumber: 51,
        symbol: "Sb",
        name: "Antimony",
        state: "Solid",
        type: "Metalloid",
        period: 5,
        group: 15
    },
    {
        atomicNumber: 52,
        symbol: "Te",
        name: "Tellurium",
        state: "Solid",
        type: "Metalloid",
        period: 5,
        group: 16
    },
    {
        atomicNumber: 53,
        symbol: "I",
        name: "Iodine",
        state: "Solid",
        type: "Non-metal",
        period: 5,
        group: 17
    },
    {
        atomicNumber: 54,
        symbol: "Xe",
        name: "Xenon",
        state: "Gas",
        type: "Non-metal",
        period: 5,
        group: 18
    },
    {
        atomicNumber: 55,
        symbol: "Cs",
        name: "Cesium",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 1
    },
    {
        atomicNumber: 56,
        symbol: "Ba",
        name: "Barium",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 2
    },
    {
        atomicNumber: "",
        symbol: "",
        name: "",
        state: "",
        type: "Lanthanide",
        period: 6,
        group: 3
    },
    {
        atomicNumber: 57,
        symbol: "La",
        name: "Lanthanum",
        state: "Solid",
        type: "Lanthanide",
        period: 9,
        group: 4
    },
    {
        atomicNumber: 58,
        symbol: "Ce",
        name: "Cerium",
        state: "Solid",
        type: "Lanthanide",
        period: 9,
        group: 5
    },
    {
        atomicNumber: 59,
        symbol: "Pr",
        name: "Praseodymium",
        state: "Solid",
        type: "Lanthanide",
        period: 9,
        group: 6
    },
    {
        atomicNumber: 60,
        symbol: "Nd",
        name: "Neodymium",
        state: "Solid",
        type: "Lanthanide",
        period: 9,
        group: 7
    },


    {
        atomicNumber: 61,
        symbol: "Pm",
        name: "Promethium",
        state: "Solid",
        type: "Lanthanide",
      period: 9,
        group: 8
    },
    {
        atomicNumber: 62,
        symbol: "Sm",
        name: "Samarium",
        state: "Solid",
        type: "Lanthanide",
      period: 9,
        group: 9
    },
    {
        atomicNumber: 63,
        symbol: "Eu",
        name: "Europium",
        state: "Solid",
        type: "Lanthanide",
      period: 9,
        group: 10
    },
    {
        atomicNumber: 64,
        symbol: "Gd",
        name: "Gadolinium",
        state: "Solid",
        type: "Lanthanide",
      period: 9,
        group: 11
    },
    {
        atomicNumber: 65,
        symbol: "Tb",
        name: "Terbium",
        state: "Solid",
        type: "Lanthanide",
      period: 9,
        group: 12
    },
    {
        atomicNumber: 66,
        symbol: "Dy",
        name: "Dysprosium",
        state: "Solid",
        type: "Lanthanide",
      period: 9,
        group: 13
    },
    {
        atomicNumber: 67,
        symbol: "Ho",
        name: "Holmium",
        state: "Solid",
        type: "Lanthanide",
      period: 9,
        group: 14
    },
    {
        atomicNumber: 68,
        symbol: "Er",
        name: "Erbium",
        state: "Solid",
        type: "Lanthanide",
      period: 9,
        group: 15
    },
    {
        atomicNumber: 69,
        symbol: "Tm",
        name: "Thulium",
        state: "Solid",
        type: "Lanthanide",
      period: 9,
        group: 16
    },
    {
        atomicNumber: 70,
        symbol: "Yb",
        name: "Ytterbium",
        state: "Solid",
        type: "Lanthanide",
      period: 9,
        group: 17
    },
    {
        atomicNumber: 71,
        symbol: "Lu",
        name: "Lutetium",
        state: "Solid",
        type: "Lanthanide",
      period: 9,
        group: 18
    },
    {
        atomicNumber: 72,
        symbol: "Hf",
        name: "Hafnium",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 4
    },
    {
        atomicNumber: 73,
        symbol: "Ta",
        name: "Tantalum",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 5
    },
    {
        atomicNumber: 74,
        symbol: "W",
        name: "Tungsten",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 6
    },
    {
        atomicNumber: 75,
        symbol: "Re",
        name: "Rhenium",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 7
    },
    {
        atomicNumber: 76,
        symbol: "Os",
        name: "Osmium",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 8
    },
    {
        atomicNumber: 77,
        symbol: "Ir",
        name: "Iridium",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 9
    },
    {
        atomicNumber: 78,
        symbol: "Pt",
        name: "Platinum",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 10
    },
    {
        atomicNumber: 79,
        symbol: "Au",
        name: "Gold",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 11
    },
    {
        atomicNumber: 80,
        symbol: "Hg",
        name: "Mercury",
        state: "Liquid",
        type: "Metal",
        period: 6,
        group: 12
    },
    {
        atomicNumber: 81,
        symbol: "Tl",
        name: "Thallium",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 13
    },
    {
        atomicNumber: 82,
        symbol: "Pb",
        name: "Lead",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 14
    },
    {
        atomicNumber: 83,
        symbol: "Bi",
        name: "Bismuth",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 15
    },
    {
        atomicNumber: 84,
        symbol: "Po",
        name: "Polonium",
        state: "Solid",
        type: "Metal",
        period: 6,
        group: 16
    },
    {
        atomicNumber: 85,
        symbol: "At",
        name: "Astatine",
        state: "Solid",
        type: "Metalloid",
        period: 6,
        group: 17
    },
    {
        atomicNumber: 86,
        symbol: "Rn",
        name: "Radon",
        state: "Gas",
        type: "Non-metal",
        period: 6,
        group: 18
    },
    {
        atomicNumber: 87,
        symbol: "Fr",
        name: "Francium",
        state: "Solid",
        type: "Metal",
        period: 7,
        group: 1
    },
    {
        atomicNumber: 88,
        symbol: "Ra",
        name: "Radium",
        state: "Solid",
        type: "Metal",
        period: 7,
        group: 2
    },
    {
        atomicNumber: "",
        symbol: "",
        name: "",
        state: "",
        type: "Actinide",
        period: 7,
        group: 3
    },
    {
        atomicNumber: 89,
        symbol: "Ac",
        name: "Actinium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 4
    },
    {
        atomicNumber: 90,
        symbol: "Th",
        name: "Thorium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 5
    },
    {
        atomicNumber: 91,
        symbol: "Pa",
        name: "Protactinium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 6
    },
    {
        atomicNumber: 92,
        symbol: "U",
        name: "Uranium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 7
    },
    {
        atomicNumber: 93,
        symbol: "Np",
        name: "Neptunium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 8
    },
    {
        atomicNumber: 94,
        symbol: "Pu",
        name: "Plutonium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 9
    },
    {
        atomicNumber: 95,
        symbol: "Am",
        name: "Americium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 10
    },
    {
        atomicNumber: 96,
        symbol: "Cm",
        name: "Curium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 11
    },
    {
        atomicNumber: 97,
        symbol: "Bk",
        name: "Berkelium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 12
    },
    {
        atomicNumber: 98,
        symbol: "Cf",
        name: "Californium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 13
    },
    {
        atomicNumber: 99,
        symbol: "Es",
        name: "Einsteinium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 14
    },
    {
        atomicNumber: 100,
        symbol: "Fm",
        name: "Fermium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 15
    },
    {
        atomicNumber: 101,
        symbol: "Md",
        name: "Mendelevium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 16
    },
    {
        atomicNumber: 102,
        symbol: "No",
        name: "Nobelium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 17
    },
    {
        atomicNumber: 103,
        symbol: "Lr",
        name: "Lawrencium",
        state: "Solid",
        type: "Actinide",
        period: 10,
        group: 18
    },
    {
        atomicNumber: 104,
        symbol: "Rf",
        name: "Rutherfordium",
        state: "Solid",
        type: "Metal",
        period: 7,
        group: 4
    },
    {
        atomicNumber: 105,
        symbol: "Db",
        name: "Dubnium",
        state: "Solid",
        type: "Metal",
        period: 7,
        group: 5
    },
    {
        atomicNumber: 106,
        symbol: "Sg",
        name: "Seaborgium",
        state: "Solid",
        type: "Metal",
        period: 7,
        group: 6
    },
    {
        atomicNumber: 107,
        symbol: "Bh",
        name: "Bohrium",
        state: "Solid",
        type: "Metal",
        period: 7,
        group: 7
    },
    {
        atomicNumber: 108,
        symbol: "Hs",
        name: "Hassium",
        state: "Solid",
        type: "Metal",
        period: 7,
        group: 8
    },
    {
        atomicNumber: 109,
        symbol: "Mt",
        name: "Meitnerium",
        state: "Solid",
        type: "Metal",
        period: 7,
        group: 9
    },
    {
        atomicNumber: 110,
        symbol: "Ds",
        name: "Darmstadtium",
        state: "Solid",
        type: "Metal",
        period: 7,
        group: 10
    },
    {
        atomicNumber: 111,
        symbol: "Rg",
        name: "Roentgenium",
        state: "Solid",
        type: "Metal",
        period: 7,
        group: 11
    }

];

export const Elements = () => {
    return (
        <>
            <div className="MainWrap">
                <h1 className="Title">원소주기율표</h1>
                <div className="periodic-table">
                    {elementsData.map(element => (
                        <ElementComponent
                            key={element.atomicNumber}
                            element={element}

                        />
                    ))}
                </div>
            </div>
        </>
    )
}
