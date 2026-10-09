/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Step 1: Ek Dummy node banate hain jo nayi train ka engine/starter hai
        const dummy = new ListNode(0);
        
        // 'tail' pointer hamesha merged list ke aakhri node par khada rahega
        let tail = dummy;

        let p1 = list1;
        let p2 = list2;

        // Step 2: Jab tak dono lists mein se koi bhi khatam na ho
        while (p1 !== null && p2 !== null) {
            // Chhoti value wale node ko tail ke aage jod do
            if (p1.val <= p2.val) {
                tail.next = p1; // p1 ko connect kiya
                p1 = p1.next;   // p1 ko aage badha diya
            } else {
                tail.next = p2; // p2 ko connect kiya
                p2 = p2.next;   // p2 ko aage badha diya
            }
            
            // Ab tail ko bhi naye jude hue node par shift kar do
            tail = tail.next;
        }

        // Step 3: Jo bhi list bachi hui hai, uske bache hue hisse ko direct tail se jod do
        if (p1 !== null) {
            tail.next = p1;
        } else if (p2 !== null) {
            tail.next = p2;
        }

        // Step 4: Dummy ke agla node hi hamari merged list ka asal head hai
        return dummy.next;
    }
}