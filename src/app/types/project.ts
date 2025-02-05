export interface Project {
  id: string;
  imgSrc: string
  imgAlt: string
  title: string
  desc: string
  attributes: {
    type: string
    yarnBrand: string
    yarnWeight: string
    yarnColor: string
    gauge: number
    needleSize: number
  }
}

export const blankProject: Project = {
  id: '',
  imgSrc: '',
  imgAlt: '',
  title: '',
  desc: '',
  attributes: {
    type: '',
    yarnBrand: '',
    yarnWeight: '',
    yarnColor: '',
    gauge: 0,
    needleSize: 0
  }
}
