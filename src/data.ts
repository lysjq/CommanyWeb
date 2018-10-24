const eledata2000: { [k: string]: { seekId: string, name: string, des?: string } } = {
    whs_f_socket_1_6: { seekId: '7b396dd8-6a44-a8e8-8948-81bcbc92b854', name: '1.6m防溅型太阳能热水器插座' },
    wm_socket_1_4: { seekId: '60b0968c-7766-3645-18f2-23a6691240cb', name: '1.4m洗衣机插座' },
    wm_f_socket_1_4: { seekId: '5b2c7b9a-0157-431d-e425-f84738faf454', name: '1.4m防溅型洗衣机插座' }
};
function get2000Date() {
    let arrydata = Object.keys(eledata2000).map(ele => {
        return {
            key: ele,
            seekId: eledata2000[ele].seekId,
            name: eledata2000[ele].name
        }
    })
    return arrydata;
};
export { get2000Date };