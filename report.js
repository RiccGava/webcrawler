printReport = (pages) => {
    console.log("report starting")
    //sorting
    let sorted = sorting(pages)
    for (let item of sorted){
        console.log(`Found ${item[1]} internal links to ${item[0]}`)

    }
    }

sorting = (pages) => {
    let arr = Object.keys(pages).map(key =>{

        return [key, pages[key]]
    })
    console.log(arr)
    arr.sort((first, second) => {
        return second[1]-first[1]
    })
    return arr
}

module.exports = {
    sorting, printReport
}
