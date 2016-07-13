function runMacro() {
  'use strict';
  var mScript = new djScriptManager(),
  mApp = mScript.getApplication(),
  mDoc = mApp.GetActiveDocument(),
  mViewManager = mDoc.GetViewManager(),
  mModel = mDoc.GetModel(),
  mSheet = mDoc.GetSheet("Model"),
  mSkMgr = mModel.GetSketchManager(),
  mCmdMess = mApp.GetCommandMessage();

  //creates spline
  var points1 = new Array(-2.25107517919653,4.37799966661110,0.00000000000000,3.10409734955826,7.16474412402067,0.00000000000000,8.61337556259377,4.10831471911985,0.00000000000000,14.55928654775796,4.84031671945324,0.00000000000000);
  var spline1 = mSkMgr.InsertSpline(points1, false, 0.00000000000000, 0.00000000000000, 0.00000000000000, 0.00000000000000, 0.00000000000000, 0.00000000000000);
}
