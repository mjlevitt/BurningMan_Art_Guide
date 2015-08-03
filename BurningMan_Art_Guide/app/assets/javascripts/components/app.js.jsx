var App = React.createClass({

  getInitialState: function(){
    return {
      path: location.pathname,
    }
  },

  componentDidMount: function(){
    $(window).on('pushstate popstate', this.pathChange);
  },
  componentWillUnmount: function(){
    $(window).off('pushstate popstate', this.pathChange);
  },

  pathChange: function(){
    this.setState({path: location.pathname})
  },

  request: function(action, method, data){
    return new Promise(function(resolve, reject){
      request = $.ajax({
        url:      action,
        method:   method,
        data:     data,
        dataType: "json"
      });

      request.done(function(serverData){
        resolve(serverData)
      });

      request.fail(function(serverData){
        reject(serverData)
      });
    });
  },

  render: function(){
    return App.router(this.state.path);
  }
});


App.router = function(path){
  if (path === '/')                   return <HomePage />;
  if (path.match(/^\/tours\/(\d+)\/edit$/)) return <TourEditPage  tour_id={RegExp.$1} />;
  if (path.match(/^\/tours\/(\d+)\/saved$/)) return <TourSavedPage tour_id={RegExp.$1} />;
  if (path.match(/^\/tours\/(\d+)$/)) return <TourShowPage  tour_id={RegExp.$1} />;
};


