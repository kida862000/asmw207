import React from "react";
function Dashboard() {
  return (
    <div>
      <div id="page-wrapper">
        <div className="header">
          <h1 className="page-header">
            Dashboard <small>Welcome John Doe</small>
          </h1>
        </div>
        <div id="page-inner">
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="board">
                <div className="panel panel-primary">
                  <div className="number">
                    <h3></h3>
                    <h3>44,023</h3>
                    <small>Daily Visits</small>
                  </div>
                  <div className="icon">
                    <i className="fa fa-eye fa-5x red" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="board">
                <div className="panel panel-primary">
                  <div className="number">
                    <h3></h3>
                    <h3>32,850</h3>
                    <small>Sales</small>
                  </div>
                  <div className="icon">
                    <i className="fa fa-shopping-cart fa-5x blue" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="board">
                <div className="panel panel-primary">
                  <div className="number">
                    <h3></h3>
                    <h3>56,150</h3>
                    <small>Comments</small>
                  </div>
                  <div className="icon">
                    <i className="fa fa-comments fa-5x green" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="board">
                <div className="panel panel-primary">
                  <div className="number">
                    <h3></h3>
                    <h3>89,645</h3>
                    <small>Daily Profits</small>
                  </div>
                  <div className="icon">
                    <i className="fa fa-user fa-5x yellow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/.row*/}
        </div>
        {/* /. PAGE INNER  */}
      </div>
    </div>
  );
}

export default Dashboard;
