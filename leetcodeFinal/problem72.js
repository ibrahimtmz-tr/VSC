let deleteDuplicates = function(head) {
    if(!head) return null

    let pre = new ListNode(0)
    pre.next = head
    let node = pre
    
    while(node.next && node.next.next) {
        if(node.next.val === node.next.next.val){
            let val = node.next.val
            while(node.next && node.next.val == val) {
                node.next = node.next.next
            }
        } else {
            node = node.next
        }
    }
    
    return pre.next
};