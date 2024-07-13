declare module 'react-plotly.js' {
    import { Component } from 'react';
    import { PlotlyHTMLElement, PlotlyScatterLayout, PlotlyScatterData, PlotlyPieData, PlotlyPieLayout } from 'plotly.js';
  
    export interface PlotParams {
      data: PlotlyScatterData[] | PlotlyPieData[];
      layout?: Partial<PlotlyScatterLayout> | Partial<PlotlyPieLayout>;
      config?: Partial<PlotlyHTMLElement>;
      [key: string]: unknown;
    }
  
    export default class Plot extends Component<PlotParams> {}
  }
  