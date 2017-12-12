#include <stdio.h>
#include <vector>
#include <iostream>
using namespace std;

int main(){

    vector<int> temp;
    int q; //test cases
    cin>>q;

    int start,end, diff;
    while(q--){
         cin>>start>>end;
         
         while(start<=end){
             int flag =0;
             for (int i = 2; i <= start/2; ++i)
             {
                 if (start % i == 0)
                 {
                     flag = 1;
                     break;
                 }
             }
             if (flag == 0)
                 //cout << start << " ";
                 temp.push_back(start);
             ++start;
         }
         if(temp.size()<2){
             cout<<"0"<<endl;
         }else{
             int a = *temp.begin();
             int b = *(temp.end()-1);
             cout<<b-a<<endl;
         }
    }
    return 0;
}