import * as arrow from "apache-arrow"
import fetch from "node-fetch"

const url = "https://gist.githubusercontent.com/domoritz/0f53a5abde95564c36dfaac623a7a922/raw/cce3719b853e25d5dfff97a270283ba83af3c0e6/flights-10k.arrow"

async function main() {
    const res = await fetch(url)
    
    const tableFromStream = await arrow.tableFromIPC(res.body)
    
    console.log(tableFromStream.getByteLength());
    console.log(tableFromStream.__proto__.getByteLength());
    console.log(tableFromStream.getByteLength(1));
    
}

main()
