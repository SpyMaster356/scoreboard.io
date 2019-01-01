import React from 'react'
import {
  connect as originalConnect,
  MapDispatchToPropsParam,
  MapStateToPropsParam,
  MergeProps,
  Options,
} from 'react-redux'

import {AppState} from "./app.reducer";


export type InferableComponentEnhancerWithProps<IInjectedProps, INeedsProps> =
  <IComponent extends React.ComponentType<IInjectedProps & INeedsProps>>(component: IComponent) => IComponent

export interface IConnect {
  <StateProps = {}, IDispatchProps = {}, OwnProps = {}>(
    mapStateToProps?: MapStateToPropsParam<StateProps, OwnProps, AppState>,
    mapDispatchToProps?: MapDispatchToPropsParam<IDispatchProps, OwnProps>,
  ): InferableComponentEnhancerWithProps<StateProps & IDispatchProps, OwnProps>

  <StateProps = {}, IDispatchProps = {}, OwnProps = {}, IMergedProps = {}>(
    mapStateToProps?: MapStateToPropsParam<StateProps, OwnProps, AppState>,
    mapDispatchToProps?: MapDispatchToPropsParam<IDispatchProps, OwnProps>,
    mergeProps?: MergeProps<StateProps, IDispatchProps, OwnProps, IMergedProps>,
    options?: Options<StateProps, OwnProps, IMergedProps>,
  ): InferableComponentEnhancerWithProps<IMergedProps, OwnProps>

}

export const connect = originalConnect as IConnect;
