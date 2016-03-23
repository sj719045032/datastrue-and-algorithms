/**
 * Created by shijin on 2016/3/22.
 */
function Graph(v){

    this.vertices=v;
    this.edges=0;
    this.adj =[];
    this.marked=[];
    this.edgeTo = [];
    for(var i=0;i<this.vertices;i++){
        this.marked[i]=false;
        this.adj[i]=[];
    }
    this.addEdge= function (v,m) {

        this.adj[v].push(m);
        this.adj[m].push(v);
        console.log(this.adj[v]);
        console.log(this.adj[m]);
        this.edges++;
    };
    this.showGraph= function () {
      for(var i=0;i<this.vertices;i++){
          var edge=i+"->";
          for(var j=0;j<this.adj[i].length;j++){
             edge+=" "+this.adj[i][j]
          }
          console.log(edge);
      }
    };
    this.initMark= function () {
        for(var i=0;i<this.vertices;i++){
            this.marked[i]=false;
        }
    };
    this.dfs=function(v){
        this.marked[v]=true;
        console.log("visit:"+v);
        if(this.adj[v]!=undefined){
          for(var w in this.adj[v]){
              if(!this.marked[this.adj[v][w]])
              this.dfs(this.adj[v][w]);
          }
           /*this.adj[v].forEach((function (self) {
               return function (item) {
                   if(!self.marked[item])
                       self.dfs(item);
               }
           })(this));*/
        }
    };
    this.bfs = function (s) {
        var queue=[];
        this.marked[s]=true;
        queue.push(s);
        while(queue.length>0){
          var v=queue.shift();
            this.marked[v]=true;
            if(v !=undefined)
           console.log("visit:"+v);
            for(var w in this.adj[v]){
                if(!this.marked[this.adj[v][w]]){
                    this.edgeTo[this.adj[v][w]]=v;
                    queue.push(this.adj[v][w]);
                }

            }
        }
    }
}

var triangle=new Graph(5);
triangle.addEdge(0,1);
triangle.addEdge(0,2);
triangle.addEdge(1,3);
triangle.addEdge(2,4);
triangle.showGraph();
triangle.dfs(0);
triangle.initMark();
triangle.bfs(0);
