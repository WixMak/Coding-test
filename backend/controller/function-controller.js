const data = require('../data.json');
const {sortTree} = require('../functions/sortTree');
const getSortedTree = (req, res, next) => {
    const sortedData =[]
    let unsortedData = data
    const parentMap = new Map();

    //create root element
    const root = [{
        categoryId: "root",
        name: "Root Category",
        parent: null,
        children:[]
    }]

    //create HashMap
    unsortedData.forEach((ele) => {
        const parentId = ele.parent;
        if (!parentMap.has(parentId)) {
            parentMap.set(parentId, []);
        }
        parentMap.get(parentId).push(ele);
    });


    //Just make sure the tree have element otherwise we are not able to do the sorting
    if (unsortedData.length === 0) {
        res.json({message:"This tree is doesn't have element!"})
        return;
    }

    sortedData.push(...root)

    const result = sortTree(sortedData, parentMap, root)

    res.json({data:result})
}

exports.getSortedTree = getSortedTree;