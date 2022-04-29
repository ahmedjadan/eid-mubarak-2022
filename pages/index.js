import Eid from '../components/Eid';
import Head from '../components/Head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head
        title="معايدة| بطاقة تهنئة| عيد الفطر المبارك 2022"
        description="أنشئ بطاقة معايدة بمناسبة عيد الفطر المبارك في عشر ثوان"
        keywords="بطاقات العيد، معايدات، كروت معايدة، تهنئة العيد"
      />
      <div className=" max-w-5xl mx-auto my-16">
        <div className="max-w-3xl text-right md:mt-16 mb-8 my-8 px-4 lg:px-0 font-messiri ">
          <h1 className="text-4xl text-indigo-600 !font-messiri font-bold">
            عيدكم مبارك،🎉 تقبل الله طاعتكم وسائر أعمالكم.
          </h1>
          <p>انقر على أي بطاقة تحب ثم قم بادخال اسمك </p>
        </div>
        <Eid />
      </div>
    </Layout>
  );
}
