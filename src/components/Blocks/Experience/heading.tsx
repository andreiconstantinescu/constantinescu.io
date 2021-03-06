import { ExperienceBlockHeadingProps, Job } from './types'
import { Div } from '../../../styles/global'
import Link from '../../Link'
import { JobName, JobDuration, JobCompany } from './styled'
import { formatDate } from '../../../utils/utils'
import { BlockHeading } from '../styled'

const JobNameComponent = (props: Pick<Job, 'type' | 'title'>): JSX.Element => (
  <JobName>
    <Div>
      <strong>{props.type}</strong>
    </Div>
    <Div>{props.title}</Div>
  </JobName>
)

const JobDurationComponent = (
  props: Pick<Job, 'startDate' | 'endDate'>
): JSX.Element => {
  const start = formatDate(new Date(props.startDate))
  const isCurrent = !Boolean(props.endDate)
  const toBeDisplayed = isCurrent
    ? [start, 'Current']
    : [start, formatDate(new Date(props.endDate))]

  return <JobDuration>{toBeDisplayed.join(' - ')}</JobDuration>
}

const ExperienceBlockHeadingComponent = (
  props: ExperienceBlockHeadingProps
): JSX.Element => {
  return (
    <BlockHeading>
      <JobNameComponent title={props.job.title} type={props.job.type} />
      <JobCompany>
        <Link label={props.company.name} url={props.company.url} />
      </JobCompany>
      <JobDurationComponent
        startDate={props.job.startDate}
        endDate={props.job.endDate}
      />
    </BlockHeading>
  )
}

export default ExperienceBlockHeadingComponent
