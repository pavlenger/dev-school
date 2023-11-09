function unpackSausages(truck) {
    let res = "";
    let numPackages = 0;
    truck.forEach((truckElement) => truckElement.forEach((sausagePackage) => {
        if (sausagePackage.length > 1 && sausagePackage === `[${sausagePackage[1].repeat(4)}]`) {
            numPackages++;
            if (numPackages % 5 !== 0) res += (`${sausagePackage[1]} `).repeat(4);
        }
    }))
    return res.trim();
}

console.log(unpackSausages([ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU", "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ]))