import { BlogSummary } from './BlogSummary';
import BlogOneImg from '@/assets/img/blog_1.jpg';

export function RecentNews() {
  return (
    <div className="w-full bg-primary-dark flex items-start">
      <div className="mt-20 py-12 pl-8 sm:pl-16 md:pl-8">
        <h3 className="font-semibold mb-10">Recent News</h3>
        <BlogSummary
          blogThumbImgUrl={BlogOneImg}
          blogTitle="The Start-Up Ultimate Guide to Make Your WordPress Journal."
          blogDate="14 Jan 2022"
        />
      </div>
    </div>
  );
}
